#include <stdio.h>

int main () {
   int N, a=0, b=0;
   scanf("%d %d %d", &N, &a, &b);
   int round = 0;
   while( a != b) {
       a -= a/2;
       b -= b/2;
       round ++;
   }
   printf("%d", round);
}