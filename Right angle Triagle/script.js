function rightAngleTriangle(height)
{
    for(let i =height;i>=1;i--)
    {
        let row = "";
        for(let j =1;j<=i;j++)
        {
            row+= '*';
        }
        console.log(row);
    }
}

const triangleHeight = 10;
rightAngleTriangle(triangleHeight);