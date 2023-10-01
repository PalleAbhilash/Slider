var a=["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg"]
var number=0;
function right()
{
    number++;
    if(number!=12)
    {
        document.getElementById("background").style.backgroundImage=url(`${a[number]}`)
    }
    else
    {
        number=0;
        document.getElementById("background").style.backgroundImage=url(`${a[number]}`)
    }
}
function left()
{
    number--;
    if(number<0)
    {
        number=11;
        document.getElementById("background").style.backgroundImage=`url(${a[number]})`
    }
    else
    {
        document.getElementById("background").style.backgroundImage=`url(${a[number]})`
    }
}
number=0;
function slider()
{
    number++;
    document.getElementById("background").style.backgroundImage=`url(${a[number]})`
}
setInterval(slider,3000)