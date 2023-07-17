class Ejercicios {
    limpiar() {
        let d = document
        d.getElementById("dato-ingresado").value = ""
        d.getElementById("txt-respuesta").value = ""
    }
    cambiar_dinero() {
        let $input = document.getElementById("dato-ingresado");
        let nume = parseInt($input.value);
        let arre = [];
        if (!nume || isNaN(nume)) {
            $input.value = " ";
            return;
        }

        if (nume < 100) {
            let billetes50 = Math.floor(nume / 50);
            nume = nume % 50;
            if (billetes50 > 0) {
                arre.push(billetes50 + " de $50");
            }

            let billetes20 = Math.floor(nume / 20);
            nume = nume % 20;
            if (billetes20 > 0) {
                arre.push(billetes20 + " de $20");
            }

            let billetes10 = Math.floor(nume / 10);
            nume = nume % 10;
            if (billetes10 > 0) {
                arre.push(billetes10 + " de $10");
            }

            let billetes5 = Math.floor(nume / 5);
            nume = nume % 5;
            if (billetes5 > 0) {
                arre.push(billetes5 + " de $5");
            }

            let billete1 = nume;
            if (billete1 > 0) {
                arre.push(billete1 + " de $1");
            }

            if (arre.length > 0) {
                $input.value = "La cantidad de billetes son: " + arre.join(","); //un billete dew 1$,un billete de 5$
            } else {
                $input.value = "No hay ningun billete";
            }
        } else {
            $input.value = "Ingresaste una cantidad mayor o igual 100 dolares";
        }
    }
    multiplo() {
        let $input = document.getElementById("dato-ingresado");
        let numero1 = parseInt(prompt("Ingresa un numero"))
        let numero2 = parseInt(prompt("Ingresa comprobar multiplo"))
        if (numero1 > numero2) {
            if (numero1 % numero2 === 0) {
                $input.value = numero2 + " si es multiplo de " + numero1
            } else {
                $input.value = numero2 + " no es multiplo de " + numero1
            }
        } else {
            $input.value = "El primer numero tiene que ser mayor al segundo"
        }
    }
    divisor() {
        let $input = document.getElementById("dato-ingresado");
        let numero1 = parseInt(prompt("Ingresa un numero"))
        let numero2 = parseInt(prompt("Ingresa comprobar multiplo"))
        if (numero1 > numero2) {
            if (numero1 % numero2 === 0) {
                $input.value = numero2 + " si es divisor de " + numero1
            } else {
                $input.value = numero2 + " no es divisor de " + numero1
            }
        } else {
            $input.value = "El primer numero tiene que ser mayor al segundo"
        }
    }
    sumaDivisores() {
        let suma = 0
        let contador = 0
        let $input = document.getElementById("dato-ingresado");
        let numero1 = parseInt($input.value)
        while (contador < numero1) {
            if (numero1 % contador === 0) {
                suma += contador
            }
            contador++
        }
        $input.value = "La suma de divisores es: " + suma

    }
    contarDivisores() {
        let contadorDivisores = 0
        let $input = document.getElementById("dato-ingresado");
        let numero1 = parseInt($input.value)

        for (let i = 0; i < numero1; i++) {
            if (numero1 % i === 0) {
                contadorDivisores++
            }
        }
        $input.value = "La cantidad de divisores es: " + contadorDivisores

    }

    //numero perfecto: cuando la suma de sus divisores sin contar el mismo numero es el mismo numero
    numeroPerfecto() {
        let contador = 0
        let suma = 0
        let $input = document.getElementById("dato-ingresado");
        let numero1 = parseInt($input.value)
        while (contador < numero1) {
            if (numero1 % contador == 0) {
                suma += contador
            }
            contador++
        }
        if (suma === numero1) {
            $input.value = "El numero " + numero1 + " es perfecto"

        } else {
            $input.value = "El numero " + numero1 + " no es perfecto"
        }
    }
    numerosAmigos() {
        let $input = document.getElementById("dato-ingresado");
        let numero1 = parseInt(prompt("Ingresa un numero"))
        let numero2 = parseInt(prompt("Ingresa otro numero"))
        let suma1 = 0
        let suma2 = 0
        let contador1 = 0
        let contador2 = 0
        while (contador1 < numero1) {
            if (numero1 % contador1 === 0) {
                suma1 += contador1
            }
            contador1++
        }
        while (contador2 < numero2) {
            if (numero2 % contador2 === 0) {
                suma2 += contador2
            }
            contador2++
        }
        if (suma1 === numero2 && suma2 === numero1) {
            $input.value = "Los numeros " + numero1 + " y " + numero2 + " son amigos"
        } else {
            $input.value = "Los numeros " + numero1 + " y " + numero2 + " no son amigos"
        }

    }
    numeroPrimo() {
        let contador = 2
        let comparar = 1
        let $input = document.getElementById("dato-ingresado");
        let numero1 = parseInt($input.value)
        while (contador < numero1) {
            if (numero1 % contador === 0) {
                comparar = contador
            }
            contador++
            break
        }
        if (comparar === 1) {
            $input.value = "El numero " + numero1 + " es primo"
        } else {
            $input.value = "El numero " + numero1 + " no es primo"
        }
    }
    isPimo(numero) {
        let contador = 2
        if (numero === 1) {
            return false
        }
        while (contador < numero) {
            if (numero % contador === 0) {
                return false
            }
            contador++
            break
        }
        return true
    }

    primosGemelos() {

        let $input = document.getElementById("dato-ingresado");
        let numero1 = parseInt(prompt("Ingresa un numero"))
        let numero2 = parseInt(prompt("Ingresa otro numero"))
        if (this.isPimo(numero1) && this.isPimo(numero2) && Math.abs(numero1 - numero2) === 2) {
            $input.value = "Los numeros " + numero1 + " y " + numero2 + " son primos gemelos"
        } else {
            $input.value = "Los numeros " + numero1 + " y " + numero2 + " no son primos gemelos"
        }
    }
    numeroInvertido() {
        let $input = document.getElementById("dato-ingresado");
        let numeroIngresado = parseInt($input.value);
        let digito = 0;
        let array = []
        while (numeroIngresado !== 0) {
            digito = numeroIngresado % 10;
            numeroIngresado = Math.floor(numeroIngresado / 10);
            array.push(digito);
        }
        $input.value = array
    }
    cantidaDigitos() {
        let $input = document.getElementById("dato-ingresado");
        let numeroIngresado = parseInt($input.value);
        let digito;
        let array = []
        while (numeroIngresado !== 0) {
            digito = numeroIngresado % 10;
            numeroIngresado = Math.floor(numeroIngresado / 10);
            array.push(digito);
        }
        $input.value = "la cantidad de digitos del numero: " + array.length
    }

    factorial() {
        let $input = document.getElementById("dato-ingresado");
        let numeroIngresado = parseInt($input.value);
        let producto = 1
        let contador = 1
        while (contador <= numeroIngresado) {
            producto = producto * contador
            contador++
        }
        $input.value = "El resultado es: " + producto
    }
    exponente() {
        let $input = document.getElementById("dato-ingresado");
        let numeroIngresado = parseInt($input.value);
        let exponenteIngresado = parseInt(prompt("Ingresa un exponente"))
        let contador = 1
        let producto = 1
        //0             //3
        while (contador <= exponenteIngresado) {
            producto = producto * numeroIngresado
            contador++
        }
        $input.value = "El resultado es: " + producto
    }

    tablaMultiplicar() {
        let $input = document.getElementById("dato-ingresado");
        let respuest = document.getElementById("txt-respuesta")
        let numeroIngresado = parseInt($input.value);
        let contador = 1
        let producto = 0
        let resultado = ""
        while (contador <= 12) {
            producto = contador * numeroIngresado
            resultado += contador + " X " + numeroIngresado + "=" + producto + "\n"
            contador++
            respuest.value = resultado
        }
    }
    fibonacci() {
        let $input = document.getElementById("dato-ingresado");
        let numeroIngresado = parseInt($input.value);
        let fib = [1, 1]
        if (numeroIngresado <= 2) {
            $input.value = fib
        }
        for (let i = 2; i < numeroIngresado; i++) {
            let suma = fib[i - 1] + fib[i - 2];
            fib.push(suma)
        }

        $input.value = fib;
    }


}




let x = new Ejercicios()