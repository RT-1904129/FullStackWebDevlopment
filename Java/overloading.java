public class overloading {

    //void sum(int a,int b){System.out.println("a method invoked");}
    void sum(long a,long b){System.out.println("b method invoked");}

    public static void main(String args[]){
        overloading  obj=new overloading ();
        obj.sum(20,20);//now ambiguity
    }
}
