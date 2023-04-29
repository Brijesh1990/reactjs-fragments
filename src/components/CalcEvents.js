
function add()
{
    const a=parseInt(prompt('Enter a values :'));
    const b=parseInt(prompt('Enter b values :'));
    const c=a+b;
    console.log(c);
    alert('Additions of numbers is :'+c)
}
function subs()
{
    const a=parseInt(prompt('Enter a values :'));
    const b=parseInt(prompt('Enter b values :'));
    const c=a-b;
    console.log(c);
    alert('Substractions of numbers is :'+c)
}
function mult()
{
    const a=parseInt(prompt('Enter a values :'));
    const b=parseInt(prompt('Enter b values :'));
    const c=a*b;
    alert('Multiplications of numbers is :'+c)
}

export {add,subs,mult}