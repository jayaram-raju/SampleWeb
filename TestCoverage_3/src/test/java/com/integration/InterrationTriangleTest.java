package com.integration;
/*
 * JUnit test for the Triangle class
 * This class works inside Netbeans -- See JUnit documentation for more info
 * http://www.junit.org/
 */

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.experimental.categories.Category;

import com.annotation.type.IntegrationTest;
import com.source.Triangle;

import static org.junit.Assert.*;

/**
 * 
 * @author M1026473
 *
 */
@Category(com.annotation.type.IntegrationTest.class)
public class InterrationTriangleTest {
    // Create a new Triangle
    public InterrationTriangleTest() {
    }

    @BeforeClass
    public static void setUpClass() throws Exception {
        System.out.println("\nSETUP CLASS RUNNING -- Nothing to do though");
    }

    @AfterClass
    public static void tearDownClass() throws Exception {
        System.out.println("\nTEARDOWN CLASS RUNNING -- Nothing to do though");
    }

    @Before
    public void setUp() {
        System.out.println("\nSETUP IS RUNNING -- Nothing to do though");
    }

    @After
    public void tearDown() {
        System.out.println("TEARDOWN IS RUNNING -- Nothing to do though");
    }

   
    @Test
    @Category(IntegrationTest.class)
    public void testEquilateral() {
        System.out.println("testEquilateral");
        Triangle instance = new Triangle("1", "1", "1");
        String expResult = "Equilateral";
        String result = instance.determineTriangleType();
        assertEquals(expResult, result);
    }

    
    @Test
    @Category(IntegrationTest.class)
    public void testInvalidTriangle() {
        System.out.println("testInvalidTriangle");
        Triangle instance = new Triangle("-40", "20", "20");
        String expResult = "At least one length is less than 0!\n" +"The lengths of the triangles do not form a valid triangle!\n";
        String result = instance.determineTriangleType();
        assertEquals(expResult, result);
    }
    
    @Test
    @Category(IntegrationTest.class)
    public void testIsoceles() {
        System.out.println("testIsoceles");
        Triangle instance = new Triangle("30", "40", "30");
        String expResult = "Isosceles";
        String result = instance.determineTriangleType();
        assertEquals(expResult, result);
    }
    
}