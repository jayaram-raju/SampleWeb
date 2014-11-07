/**
 * 
 */
package com.mindtree.maven.azure;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URISyntaxException;
import java.security.InvalidKeyException;
import java.util.LinkedList;
import java.util.List;
import java.util.Properties;

import org.apache.maven.plugin.AbstractMojo;
import org.apache.maven.plugin.MojoExecutionException;
import org.apache.maven.plugin.MojoFailureException;
import org.apache.maven.plugins.annotations.Mojo;
import org.apache.maven.plugins.annotations.Parameter;
import org.apache.maven.project.MavenProject;

import com.microsoft.azure.storage.CloudStorageAccount;
import com.microsoft.azure.storage.StorageException;
import com.microsoft.azure.storage.blob.BlobContainerPermissions;
import com.microsoft.azure.storage.blob.BlobContainerPublicAccessType;
import com.microsoft.azure.storage.blob.CloudBlobClient;
import com.microsoft.azure.storage.blob.CloudBlobContainer;
import com.microsoft.azure.storage.blob.CloudBlockBlob;

/**
 * @author M1019330
 * 
 */
@Mojo(requiresOnline = true, name = "upload", requiresProject = false, threadSafe = false)
public class AzureUploadMojo extends AbstractMojo {

	public static final String connectionString = "DefaultEndpointsProtocol=http;"
			+ "AccountName=%s;" + "AccountKey=%s";

	private static final String CONTAINER_NAME = "deployment";

	private static final String TARGET_FOLDER = "target";

	@Parameter(required = true)
	private String accessKey = null;

	@Parameter(required = true)
	protected String storageAccountName = null;

	@Parameter(defaultValue = "${project.basedir}")
	protected File root;

	public AzureUploadMojo() {
	}
	/**
	 * @param accessKey
	 * @param storageAccountName
	 * @param project
	 * @param root
	 */
	public AzureUploadMojo(String accessKey, String storageAccountName,
			File root) {
		super();
		this.accessKey = accessKey;
		this.storageAccountName = storageAccountName;
		this.root = root;
	}

	@Override
	public void execute() throws MojoExecutionException, MojoFailureException {
		String storageConnectionString = String.format(connectionString,
				storageAccountName, accessKey);

		try {
			// login to storage account using access keys
			CloudStorageAccount account = CloudStorageAccount
					.parse(storageConnectionString);

			// create Blob client
			CloudBlobClient serviceClient = account.createCloudBlobClient();
			CloudBlobContainer container = serviceClient
					.getContainerReference(CONTAINER_NAME);
			container.createIfNotExists();
			// Create a permissions object.
			BlobContainerPermissions containerPermissions = new BlobContainerPermissions();

			// Include public access in the permissions object.
			containerPermissions
					.setPublicAccess(BlobContainerPublicAccessType.CONTAINER);

			// Set the permissions on the container.
			container.uploadPermissions(containerPermissions);

			List<File> targetfiles = getAllWARFiles(getTargetDirectory());
			if (targetfiles != null && !targetfiles.isEmpty()) {
				uploadFiles(targetfiles, container);
			}
			System.out.println("File Uploded Successfully");
		} catch (Exception ex) {
			throw new MojoFailureException(ex.getMessage());
		}

	}

	// TODO Needs a genric implementation
	private File getTargetDirectory() {
		File targetDir = null;
		File[] files = root != null ? root.listFiles() : null;
		if (files != null) {
			for (File file : files) {
				if (file.isDirectory()
						&& file.getName().equalsIgnoreCase(TARGET_FOLDER)) {
					targetDir = file;
				}
			}
		}
		return targetDir;
	}

	private List<File> getAllWARFiles(File target) {
		List<File> targetfiles = new LinkedList<File>();
		if (target != null && target.isDirectory()) {
			File[] files = target.listFiles();
			for (File file : files) {
				if (file.isFile() && file.getAbsolutePath().endsWith(".war")) {
					targetfiles.add(file);
				}
			}

		}
		return targetfiles;
	}

	private void uploadFiles(List<File> targetfiles,
			CloudBlobContainer container) throws URISyntaxException,
			StorageException, FileNotFoundException, IOException {
		for (File file : targetfiles) {
			CloudBlockBlob blob = container.getBlockBlobReference(file
					.getName());
			blob.upload(new FileInputStream(file), file.length());
		}
	}

}
