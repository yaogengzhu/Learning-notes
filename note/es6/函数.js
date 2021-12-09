function factorial(n, total) {
    if (n === 1) return total;
    return factorial(n - 1, n * total);
  }
  
  factorial(5, 1) // 120◊