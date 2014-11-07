/**
 * 
 */
package com.mindtree.test.maven.azure;

import java.io.File;

import org.apache.maven.plugin.MojoExecutionException;
import org.apache.maven.plugin.MojoFailureException;
import org.junit.Assert;
import org.junit.Test;

import com.mindtree.maven.azure.AzureUploadMojo;

/**
 * @author M1019330
 *
 */

public class PluginTest {

/*	@Test
	public void testPulginSuccess() throws MojoExecutionException, MojoFailureException
	{
		AzureUploadMojo azureUploadMojo = new AzureUploadMojo("KNOgW1vBk3PhpzVXJWWPZveYyE3luQT25Ut5tLFosbTwaRqGGq7uXvfKtFtkcPQ6I+iSKpDGuAzWZq+XdY7uVw==","testlabstorage2",new File("G:\\azure\\"));
		azureUploadMojo.execute();
		Assert.assertTrue(true);
	}*/
	@Test
	public void testPulginFailure1() throws MojoExecutionException, MojoFailureException
	{
		AzureUploadMojo azureUploadMojo = new AzureUploadMojo("KNOgW1vBk3PhpzVXJWWPZveYyE3luQT25Ut5tLFosbTwaRqGGq7uXvfKtFtkcPQ6I+iSKpDGuAzWZq+XdY7uVw==","testlabstorage2",new File("G:\\azure\\target"));
		azureUploadMojo.execute();
		Assert.assertTrue(true);
	}
	
	//wrong access key
	@Test(expected=MojoFailureException.class)
	public void testPulginFailure4() throws MojoExecutionException, MojoFailureException
	{
		AzureUploadMojo azureUploadMojo = new AzureUploadMojo("KNOgW1vBk3PhpzVXJWWPZveE3luQT25Ut5tLFosbTwaRqGGq7uXvfKtFtkcPQ6I+iSKpDGuAzWZq+XdY7uVw==","testlabstorage2",new File("G:\\azure\\target"));
		azureUploadMojo.execute();
		Assert.assertTrue(true);
	}
	
	//wrong account
		@Test(expected=MojoFailureException.class)
		public void testPulginFailure2() throws MojoExecutionException, MojoFailureException
		{
			AzureUploadMojo azureUploadMojo = new AzureUploadMojo("KNOgW1vBk3PhpzVXJWWPZveE3luQT25Ut5tLFosbTwaRqGGq7uXvfKtFtkcPQ6I+iSKpDGuAzWZq+XdY7uVw==","testlabstorage278",new File("G:\\azure\\target"));

			azureUploadMojo.execute();
			Assert.assertTrue(true);
		}
		
		//wrong path
				@Test(expected=MojoFailureException.class)
				public void testPulginFailure3() throws MojoExecutionException, MojoFailureException
				{
					AzureUploadMojo azureUploadMojo = new AzureUploadMojo("KNOgW1vBk3PhpzVXJWWPZveE3luQT25Ut5tLFosbTwaRqGGq7uXvfKtFtkcPQ6I+iSKpDGuAzWZq+XdY7uVw==","testlabstorage278",new File("G:\\azure\\target\\rr.txt"));

					azureUploadMojo.execute();
					Assert.assertTrue(true);
				}
}
