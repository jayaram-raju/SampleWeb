package com.source;
import static org.junit.Assert.fail;

import org.junit.Before;
import org.junit.Test;


public class testclass {

	@Before
	public void setup() {
		System.out.println("Before Every Test");
		
	}
	
	
	@Test
	public void test1(){
		System.out.println("Test case 1 executed");
		fail("test");
	}
	
	
	@Test
	public void test2(){
		System.out.println("Test case 2 executed");
	}
	
	@Test
	public void test3(){
		System.out.println("Test case 3 executed");
	}
	
	
	
	
}
