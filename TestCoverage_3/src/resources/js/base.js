$(function(){
	$(document).ready(function(){
		if(typeof console === "undefined") {
		    console = {
		        log : function () {}
		    };
		}
		setCSSToUI();
		$(window).resize(function() {
			setCSSToUI();
		});
		
        var perPage = 5;
        var opened = 1;
        var onClass = 'on';
        var paginationSelector = '.pages';
        $('.gallery').simplePagination(perPage, opened, onClass, paginationSelector);

	});
});

function setCSSToUI(){
	var pageHeight =$(window).height();
	var pageWidth =$(window).width();
	$("#id_body").css("height", pageHeight);
	$("#id_body").css("width", pageWidth);
}

function show_menu(){
    var menu = document.getElementById('dropdown_menu');
    
    if(menu.style.display == 'block'){
        menu.style.display = 'none';
    }else {
        menu.style.display = 'block';                    
    }
}

var interverlCall;
function setProgressBar(){
       showProgressBar();
}

function hideProgessBar(){
       $("#id_progressBarNew").hide();
}


function showProgressBar(){
       $("#id_progressBarNew").show();
       
}

$(document).ready(function(){
       $('#runScreenShot').click(function(){
              setProgressBar();
          });
       });


$(document).ready(function(){
       $('#runScreenShotMobile').click(function(){
              setProgressBar();
          });
       });

$(document).ready(function(){
    $('#id_runRegressionScreenShot').click(function(){
           setProgressBar();
       });
    });

$(document).ready(function(){
    $('#runScreenShotForRepeatTest').click(function(){
           setProgressBar();
       });
    });

var getStatus = function (){
	var url = 'getExecutionStatus';
	var textExecution="execution";
	$.ajax({
    url: url,
    type: "POST",
    
    data: { result : textExecution} ,
    success: function (response) {
    	clearInterval(interverlCall);
    	hideProgessBar();
    	
    },
    error: function () {
    	clearInterval(interverlCall);
		hideProgessBar();
    } 
 	}); 
	
};
	

$(document).ready(function() {
	
	hideProgessBar();
	
	$('#windowedThumbImage').click(function(event) { 
		var hiddenWindowedThumbImage=$('#hiddenWindowedThumbImage').val();
		$("#uiImage").attr("src", "http://localhost:8080/maas.uilite/getScreenshot?path="+hiddenWindowedThumbImage);
	});
	
	$('#fullpageThumbImage').click(function(event) { 
		var hiddenFullpageThumbImage=$('#hiddenFullpageThumbImage').val();
		$("#uiImage").attr("src", "http://localhost:8080/maas.uilite/getScreenshot?path="+hiddenFullpageThumbImage);
	});
	
	$('#chromelessThumbImage').click(function(event) { 
		var hiddenChromelessThumbImage=$('#hiddenChromelessThumbImage').val();
		$("#uiImage").attr("src", "http://localhost:8080/maas.uilite/getScreenshot?path="+hiddenChromelessThumbImage);
	});
	
	$('#windowedImage').click(function(event) { 
		var hiddenWindowedImage=$('#hiddenWindowedImage').val();
		$("#uiImage").attr("src", "http://localhost:8080/maas.uilite/getScreenshot?path="+hiddenWindowedImage);
	});
	
	$('#fullpageImage').click(function(event) { 
		var hiddenFullpageImage=$('#hiddenFullpageImage').val();
		$("#uiImage").attr("src", "http://localhost:8080/maas.uilite/getScreenshot?path="+hiddenFullpageImage);
	});
	
	$('#chromelessImage').click(function(event) { 
		var hiddenChromelessImage=$('#hiddenChromelessImage').val();
		$("#uiImage").attr("src", "http://localhost:8080/maas.uilite/getScreenshot?path="+hiddenChromelessImage);
	});
	
	
	 $('#testSingleUrl').click(function(event){
		 window.location.href='testSingleUrl';
	 });
	 
	 $('#getMyResults').click(function(event){
		 window.location.href='getMyResults';
	 }); 
		 
	 $('#regressionTest').click(function(event) {
		 window.location.href='testRegression';
	 });
	 
	 $('#logout').click(function(event) {
		 window.location.href='logout';
	 });
	 
	 
	 $('#getRepeatResults').click(function(event) {
		 window.location.href='getRepeatResults';
	 });
	
	 function validateAdd() {
		 var browser=$('#id_browser').val();
	  	 var os=$('#id_os').val();
	  	 var resolution=$('#id_resolution').val();
		 var validValues = true;
		 if(os == "-1") {
			 validValues = false;
			 setErrorMessage("#id_os"); 
		 }
		 if(browser == "-1") {
			 validValues = false;
			 setErrorMessage("#id_browser"); 
		 }
		 if(resolution == "-1") {
			 validValues = false;
			 setErrorMessage("#id_resolution"); 
		 }
		 return validValues;
	 }
	 
	 function validSelection() {
		 var listSelected = $('#id_selectTemplateList').val();
		 if(listSelected == "-1") {
			 setErrorMessage("#id_selectTemplateList");
			 return false;
		 }
		 return true;
	 }
	 
	 function validateAddForRegression() {
		 var browser=$('#id_browserForRegressionTest').val();
	  	 var os=$('#id_osForRegressionTest').val();
	  	 var resolution=$('#id_resolutionForRegressionTest').val();
		 var validValues = true;
		 if(os == "-1") {
			 validValues = false;
			 setErrorMessage("#id_osForRegressionTest"); 
		 }
		 if(browser == "-1") {
			 validValues = false;
			 setErrorMessage("#id_browserForRegressionTest"); 
		 }
		 if(resolution == "-1") {
			 validValues = false;
			 setErrorMessage("#id_resolutionForRegressionTest"); 
		 }
		 return validValues;
	 }
	 
	 function clearErrorMessage(id) {
			if (id != null) {
				$(id).removeClass("errInputBox");
			}
		}
	 
	function setErrorMessage(id){
			if (id != null) {
				$(id).addClass("errInputBox");
			}
		}
	 
	 $('#id_addBrowserButton').click(function(event) {
		 clearErrorMessage("#id_os");
		 clearErrorMessage("#id_browser");
		 clearErrorMessage("#id_resolution");
		 if(validateAdd()){
		  var browser=$('#id_browser').val();
	  	  var os=$('#id_os').val();
	  	  var resolution=$('#id_resolution').val();
	  	  var index = $("#id_browserSetSize").val();
	 	  var browserSet = "<input type='hidden' name='browserSet["+index+"].browserName' value='"+browser+"'>"+
	 	  					"<input type='hidden' name='browserSet["+index+"].os' value='"+os+"'>"+
	 	  					"<input type='hidden' name='browserSet["+index+"].resolution' value='"+resolution+"'>";
	 	  
	 	  $("#id_screenshotTestForm").append(browserSet);
	 	  $("#id_screenshotTestForm").submit();
	 	 $("#id_progressBarNew").hide();
	 }
	  }); 
	 
	  
	 $('#id_addBrowserButtonForRegressionTest').click(function(event) {
		 clearErrorMessage("#id_osForRegressionTest");
		 clearErrorMessage("#id_browserForRegressionTest");
		 clearErrorMessage("#id_resolutionForRegressionTest");
		 if(validateAddForRegression()){
		  var browser=$('#id_browserForRegressionTest').val();
	  	  var os=$('#id_osForRegressionTest').val();
	  	  var resolution=$('#id_resolutionForRegressionTest').val();
	  	  var index = $("#id_browserSetSizeForRegressionTest").val();
	 	  var browserSet = "<input type='hidden' name='browserSet["+index+"].browserName' value='"+browser+"'>"+
	 	  					"<input type='hidden' name='browserSet["+index+"].os' value='"+os+"'>"+
	 	  					"<input type='hidden' name='browserSet["+index+"].resolution' value='"+resolution+"'>";
	 	  
	 	  $("#id_regressionTestForm").append(browserSet);
	 	  $("#id_regressionTestForm").submit();
	 	 $("#id_progressBarNew").hide();
	 }
	  });   
	 
	  $('#homePage').click(function(event){
	 		 window.location.href='homePage';
	 	 });
	 	 
	      
	      $('#UnderConstructuon').click(function(event){
	  		 window.location.href='UnderConstructuon';
	  	 });
	      
	   
	      $(document).ready(function(){
	    	    $('.img-zoom').hover(function() {
	    	        $(this).addClass('transition');
	    	 
	    	    }, function() {
	    	        $(this).removeClass('transition');
	    	    });
	    	  });
	      
	     $('#id_compare_button').click(function(){
	    	 var baseline = $("#id_baselineBrowser").val();
	    	 var otherBrowser = $("#id_otherBrowser").val();
	    	 var url = "compareSelectedBrowsers";
	    	 $.ajax({
	    		url: url,
	    		type: "POST",
	    		data: {baselineId:baseline, otherBrowserId:otherBrowser},
	    		success: function (response) {
	    	    	$('#id_comparedResultDiv').show();
	    	    	$('#id_comparedResultDiv').html(response);
	    	    }
	    	 });
	     });
	      
	      $('.viewReportButton').click(function() {
	    	  var id = $(this).attr("id");
	    	  var strings = id.split("_");
	    	  var testId = strings[2];
	    	  var form = "<form id='id_resultForm' action='getTestReport' method='POST'><input name='screenshotTestId' value='"+testId+"'></form>";
		      $("body").append(form);
		      $("#id_resultForm").submit();
	      });
	      
	      $('.viewRegressionReportButton').click(function() {
	    	  var id = $(this).attr("id");
	    	  var strings = id.split("_");
	    	  var testId = strings[2];
	    	  var form = "<form id='id_resultForm' action='getRegressionTestReport' method='POST'><input name='regressionTestId' value='"+testId+"'></form>";
		      $("body").append(form);
		      $("#id_resultForm").submit();
	      });
	      
	      $('.viewRepeatReportButton').click(function() {
	    	  var id = $(this).attr("id");
	    	  var strings = id.split("_");
	    	  var testId = strings[2];
	    	  var form = "<form id='id_resultForm' action='getRepeatTest' method='POST'><input name='screenshotTestId' value='"+testId+"'></form>";
		      $("body").append(form);
		      $("#id_resultForm").submit();
	      });
	      
	      
	      $('.viewRepeatButton').click(function() {
	    	  var id = $(this).attr("id");
	    	  var strings = id.split("_");
	    	  var testId = strings[2];
	    	  var form = "<form id='id_resultForm' action='getRepeatTest' method='POST'><input name='screenshotTestId' value='"+testId+"'></form>";
		      $("body").append(form);
		      $("#id_resultForm").submit();
	      });
	      
	      $('#videoTesting').click(function(event) {  
              window.location.href="redirectvideoTestingBrowser";
        }); 
        
        $('#testMobileDevice').click(function(event) {  
                     window.location.href="redirectTestMobileDevice";
        }); 
        
        $('#myAccounts').click(function(event) {  
               window.location.href="redirectMyAccountsPage";
        });

        $('#viewAllBrowserResults').click(function(event) {
   		 window.location.href='viewAllBrowserResults';
   	 });
   	 


        $('#id_clearBrowserButton').click(function(event) {
              $("#id_progressBarNew").hide();
        });
        
        $('#id_clearBrowserButtonForRegressionTest').click(function(event) {
            $("#id_progressBarNew").hide();
      });

        $('#id_compareRegressionButton').click(function(){
	    	 var baseline = $("#id_firstScreenshot").val();
	    	 var otherBrowser = $("#id_secondScreenshot").val();
	    	 var url = "compareSelectedRegressionBrowsers";
	    	 $.ajax({
	    		url: url,
	    		type: "POST",
	    		data: {baselineId:baseline, otherBrowserId:otherBrowser},
	    		success: function (response) {
	    	    	$('#id_comparedRegressionResultDiv').show();
	    	    	$('#id_comparedRegressionResultDiv').html(response);
	    	    }
	    	 });
	     });
        
        $('#id_back_button').click(function() {
        	 window.location.href="compareRegressionScreenshots";
        });
        
        $('#id_backButton').click(function() {
       	 window.location.href="backToScreenshotTestSummary";
       });
        
        $('#id_backButton_repeat').click(function() {
          	 window.location.href="backToRepeatTestSummary";
          });
        
       $('#id_selectTestType').change(function(){
    	   var optionSelected = $(this).val();
    	   var form = "<form id='id_testtypeForm' action='getSelectedResults' method='POST'><input name='selectedTestType' value='"+optionSelected+"'></form>";
		      $("body").append(form);
		      $("#id_testtypeForm").submit();
       });
       
       $('#id_createTemplate').click(function(){
    	   window.location.href = "createTemplate";
       });
       
       
  	 $('#id_addBrowserForTemplate').click(function(event) {
		 clearErrorMessage("#id_os");
		 clearErrorMessage("#id_browser");
		 clearErrorMessage("#id_resolution");
		 if(validateAdd()){
		  var browser=$('#id_browser').val();
	  	  var os=$('#id_os').val();
	  	  var resolution=$('#id_resolution').val();
	  	  var index = $("#id_browserSetSize").val();
	 	  var selectedBrowsers = "<input type='hidden' name='selectedBrowsers["+index+"].browser' value='"+browser+"'>"+
	 	  					"<input type='hidden' name='selectedBrowsers["+index+"].os' value='"+os+"'>"+
	 	  					"<input type='hidden' name='selectedBrowsers["+index+"].resolution' value='"+resolution+"'>";
	 	  
	 	  $("#id_userTemplateForm").append(selectedBrowsers);
	 	  $("#id_userTemplateForm").submit();
	 	 $("#id_progressBarNew").hide();
	 }
	  }); 
  	 
  	 $('#id_importTemplate').click(function(){
  		$(id_templateListDiv).show();  
  	 });
  	 
  	 $('#id_importButton').click(function(){
  		clearErrorMessage("#id_selectTemplateList");
  		 if(validSelection()) {
  		 var listSelected = $('#id_selectTemplateList').val();
  		 var form = "<form id='id_importForm' action='getSelectedList' method='POST'><input name='selectedList' value='"+listSelected+"'></form>";
  		 $("body").append(form);
  		 $("#id_importForm").submit();
  		 }
  	 });
  	 
 	 $('#id_importButtonInRegression').click(function(){
   		clearErrorMessage("#id_selectTemplateList");
   		 if(validSelection()) {
   		 var listSelected = $('#id_selectTemplateList').val();
   		 var form = "<form id='id_importForm' action='getSelectedListForRegression' method='POST'><input name='selectedList' value='"+listSelected+"'></form>";
   		 $("body").append(form);
   		 $("#id_importForm").submit();
   		 }
   	 });
 	 
 	$('#id_importButtonForMobile').click(function(){
   		clearErrorMessage("#id_selectTemplateList");
   		 if(validSelection()) {
   		 var listSelected = $('#id_selectTemplateList').val();
   		 var form = "<form id='id_importForm' action='getSelectedListForMobile' method='POST'><input name='selectedList' value='"+listSelected+"'></form>";
   		 $("body").append(form);
   		 $("#id_importForm").submit();
   		 }
   	 });
  /*	 $('#id_importTemplate').click(function(){
  		 alert("inside import template");
  		 $.ajax({
  			 url:"getUserTemplates",
  			 type:"POST",
  			 success : function() {
  				$(id_templateListDiv).show();
  				 console.log("success");
  			 }
  		 });
  	 });*/
}); 
