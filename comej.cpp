#include <iostream> 

using namespace std;

class comej
 {
 public:
void burbuja();
void quicksort();
void insercion();
void seleccion();
 }
 
void burbuja( int  array1[]){
    int i , j,TAM,temp;
     for (i=1; i<TAM; i++)
          for j=0 ; j<TAM - 1; j++)
              if (array1[j] > array1[j+1])
                    temp = array1[j];
                    array1[j] = array1[j+1];
             array1[j+1] = temp;
}

void quicksort(int array2[]){
    int sup,i,j,temp,inf,sup;
     elem_div = array2[sup];
     i = inf - 1;
     j = sup;
     cont = 1;

     if (inf >= sup)
          retornar;

     while (cont)
      while (array2[++i] < elem_div);
          while (array2[--j] > elem_div);
         if (i < j)
             temp = array2[i];
              array2[i] = array2[j];
              array2[j] = temp;
        else
              cont = 0;

    temp = array2[i];
    array2[i] = array2[sup];
    array2[sup] = temp;
    OrdRap (array2, inf, i - 1);
    OrdRap (array2, i + 1, sup);
}

void insercion(int array3[]){
    int i,j,TAM,temp;

     for (i=1; i<TAM; i++)
          temp = array3[i];
          j = i - 1;
      while ( (array3[j] > temp) && (j >= 0) )
               array3[j+1] = array3[j];
               j--;
       array3[j+1] = temp;

}

void seleccion(int array4[]){
    int i,j,TAM,temp,pos_men;

     for (i=0; i<TAM - 1; i++)
         pos_men = Menor(array4, TAM, i);
          temp = array4[i];
             array4[i] = array4 [pos_men];
                 array4[pos_men] = temp;
}

    int main {

        comej obj;

        obj.nburbuja(10);
                 cout<<"burbuja"<< array1[] <<endl;
        obj.quicksort(10);
                cout<<"quicksort"<<array2[] <<endl;
        obj.insercion(10);
                cout<<"insercion"<< array3[]<<endl;
        obj.seleccion(10)
                cout<<"seleccion"<< array4[]<<endl;

       

        obj.var1(10000);
        obj.var2(10000);
        obj.var3(10000);
        obj.var4(10000);
        return 0;

    }