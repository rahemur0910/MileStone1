let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

for(i=0;i<=numbers.length;i++)
{
    if(i%2==0)
    {
        continue;
    }
    if(i%3==0)
    {
        console.log(i);
    }
}