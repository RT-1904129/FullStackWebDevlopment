import java.io.*;

// to impliment doc just type javadoc document.java
/**
 * <h2> Calculation of numbers </h2>
 * This program implements an application
 * to perform operation such as addition of numbers
 * and print the result
 * <p>
 * <b>Note:</b> Comments make the code readable and
 * easy to understand.
 *
 * @author Rishabh Tripathi
 * @version 16.0
 * @since 2021-07-06
 */

public class document {
    /**
     * This method calculates the summation of two integers.
     * @param input1 This is the first parameter to sum() method
     * @param input2 This is the second parameter to the sum() method.
     * @return int This returns the addition of input1 and input2
     */
    public int sum(int input1, int input2){
        return input1 + input2;
    }
    /**
     * This is the main method uses of sum() method.
     * @param args Unused
     * @see IOException
     */
    public static void main(String[] args) {
        document obj = new document();
        int result = obj.sum(40, 20);

        System.out.println("Addition of numbers: " + result);

    }
}
