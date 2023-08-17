document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("luasButton").addEventListener("click", calculateArea);
    document.getElementById("kelilingButton").addEventListener("click", calculatePerimeter);
  });
  
  function calculateArea() {
    const base = parseFloat(document.getElementById("base").value);
    const height = parseFloat(document.getElementById("height").value);
  
    const area = 0.5 * base * height;
    document.getElementById("hasilLuas").textContent =  area.toFixed();
  }
  
  function calculatePerimeter() {
    const sisiA = parseFloat(document.getElementById("sisiA").value);
    const sisiB = parseFloat(document.getElementById("sisiB").value);
    const sisiC = parseFloat(document.getElementById("sisiC").value);
  
    const perimeter = sisiA + sisiB + sisiC;
    document.getElementById("hasilKeliling").textContent = perimeter.toFixed();
  }
  