/*package com.unit;

 * JUnit test for the Triangle class
 * This class works inside Netbeans -- See JUnit documentation for more info
 * http://www.junit.org/
 

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.experimental.categories.Category;

import com.source.Triangle;

import static org.junit.Assert.*;

*//**
 * 
 * @author M1026473
 *
 *//*
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

   
    //@Test
    public void testEquilateral() {
        System.out.println("testEquilateral");
        Triangle instance = new Triangle("1", "1", "1");
        String expResult = "Equilateral";
        String result = instance.determineTriangleType();
        assertEquals(expResult, result);
    }

    
    //@Test
    public void testInvalidTriangle() {
        System.out.println("testInvalidTriangle");
        Triangle instance = new Triangle("-40", "20", "20");
        String expResult = "At least one length is less than 0!\n" +"The lengths of the triangles do not form a valid triangle!\n";
        String result = instance.determineTriangleType();
        assertEquals(expResult, result);
    }
    
}*/