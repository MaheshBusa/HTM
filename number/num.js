function reverse_a_number(n)  
{  
    n = n + "";  
    return n.split("").reverse().join("");  
}  
document.write(reverse_a_number(096896));