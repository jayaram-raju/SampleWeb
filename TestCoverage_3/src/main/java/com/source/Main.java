package com.source;

/**
 * 
 * @author M1026473
 *
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Triangle t = new Triangle("-90", "20", "20");
        //String actual = t.determineTriangleType();
        System.out.println("t is:"+t.determineTriangleType());
    }

}