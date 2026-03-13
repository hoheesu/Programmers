#include<stdio.h>
#include<string.h>
int main () {
	int e, r = 0, t = 0, y = 0;
	char q[21], w[21];
	
	int max = -1;

	scanf("%d", &e);

	for (int a = 0; a<e; a++) {
		int z,x, cnt = 0;
		scanf("%s",q);
		scanf("%d %d", &z, &x);
		while(1) {
		    
			if (x < z) break;
			x-=z;
			x+=2;
			cnt++;
			y++;
		}
		
		 if (cnt > max) {
            max = cnt;
            strcpy(w, q);
        }
	}
	printf("%d\n", y);
	printf("%s",w);


}