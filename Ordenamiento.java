import java.util.*;

public class Ordenamiento {

  public void selection_sort(int array[])

  {

    int i, j, menor, tmp;
    for (i = 0; i < array.length - 1; i++) {
      menor = i;
      for (j = i + 1; j < array.length; j++) {
        if (array[j] < array[menor]) {
          menor = j;
        }
      }
      tmp = array[i];
      array[i] = array[menor];
      array[menor] = tmp;

    }
  }

  public void Insercion(int array2[]) {
    int pos, aux;

    for (int i = 0; i < array2.length; i++) {
      pos = i;
      aux = array2[i];

      while (pos > 0 && array2[pos - 1] > aux) {
        array2[pos] = array2[pos - 1];
        pos--;
      }
      array2[pos] = aux;

    }

  }

  public void QuickSort(int d[], int primero, int ultimo) {
    int pivote, aux, i, j;
    i = primero;
    j = ultimo;
    pivote = d[(primero + ultimo) / 2];
    do {
      while (d[i] < pivote) {
        i++;
      }
      while (d[j] > pivote) {
        j--;
      }
      if (i <= j) {
        aux = d[i];
        d[i] = d[j];
        d[j] = aux;
        i++;
        j--;
      }
    } while (i <= j);

    if (primero < j) {
      QuickSort(d, primero, j);
    }
    if (i < ultimo) {
      QuickSort(d, i, ultimo);
    }
  }

  void countSort(int a[], int size) {
    int[] output = new int[size + 1];

    int max = a[0];
    for (int i = 1; i < size; i++) {
      if (a[i] > max)
        max = a[i];
    }
    int[] count = new int[max + 1];

    for (int i = 0; i < max; ++i) {
      count[i] = 0;
    }

    for (int i = 0; i < size; i++) {
      count[a[i]]++;
    }

    for (int i = 1; i <= max; i++) {
      count[i] += count[i - 1];
    }

    for (int i = size - 1; i >= 0; i--) {
      output[count[a[i]] - 1] = a[i];
      count[a[i]]--;
    }

    for (int i = 0; i < size; i++) {
      a[i] = output[i];
    }
  }

  public void bucketSort(float[] arr, int n) {
    if (n <= 0)
      return;
    @SuppressWarnings("unchecked")
    ArrayList<Float>[] bucket = new ArrayList[n];

    for (int i = 0; i < n; i++)
      bucket[i] = new ArrayList<Float>();

    for (int i = 0; i < n; i++) {
      int bucketIndex = (int) arr[i] * n;
      bucket[bucketIndex].add(arr[i]);
    }

    for (int i = 0; i < n; i++) {
      Collections.sort((bucket[i]));
    }

    int index = 0;
    for (int i = 0; i < n; i++) {
      for (int j = 0, size = bucket[i].size(); j < size; j++) {
        arr[index++] = bucket[i].get(j);
      }
    }
  }

  public static void main(String[] args) {

    int[] a = new int[1000];
    for (int i = 0; i < 999; i++) {
      a[i] = (int) (Math.random() * 999 + 1);
    }

    Ordenamiento d = new Ordenamiento();
    /*
     * d.QuickSort(a,0,a.length-1);
     * System.out.println(Arrays.toString(a));
     * System.out.println("");
     * 
     * long startTime3 = System.nanoTime();
     * d.QuickSort(a,0,a.length-1);
     * long endTime3 = System.nanoTime();
     * System.out.println("Algoritmo Quick Sort:  " + (endTime3-startTime3) + "ms"
     * );
     */

    float[] arr = { (float) 0.42, (float) 0.32, (float) 0.33, (float) 0.52, (float) 0.37, (float) 0.47, (float) 0.51 };
    d.bucketSort(arr, 7);

    for (float i : arr)
      System.out.print(i + "  ");

  }
}