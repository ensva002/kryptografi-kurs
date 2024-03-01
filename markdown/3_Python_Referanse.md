

## Variabler og Datatyper

I Python kan du lagre data i variabler. En variabel kan sees på som en boks hvor du kan lagre informasjon.

```python
number = 10
text = "Hei, verden!"
```

Datatyper inkluderer blant annet heltall (`int`), flyttall (`float`), strenger (`str`), og booleans (`bool`).

## Input og Output

For å samhandle med brukeren, kan du bruke `input()` for å motta input og `print()` for å vise output.

```python
name = input("Hva heter du? ")
print("Hei, " + name + "!")
```

## Betingelser

Betingelser lar deg utføre forskjellige handlinger basert på om en betingelse er sann eller ikke.

```python
age = int(input("Hvor gammel er du? "))
if age >= 18:
    print("Du er voksen.")
else:
    print("Du er barn.")
```

## Løkker

Løkker gjør at du kan gjenta kode flere ganger.

### While-løkke

```python
count = 0
while count < 5:
    print("Tallet er", count)
    count += 1
```

### For-løkke

```python
for i in range(5):
    print("Tallet er", i)
```

## Lister

Lister lar deg lagre flere verdier i en enkelt variabel.

```python
fruits = ["eple", "banan", "kirsebær"]
print(fruits[0])  # Utskrift: eple
```

## Funksjoner

Funksjoner lar deg definere en blokk med kode som du kan kjøre flere ganger.

```python
def greet(name):
    print("Hei " + name + "!")

greet("Anna")
```

## Feilhåndtering

Feilhåndtering i Python gjøres vanligvis med `try` og `except` blokker.

```python
try:
    number = int(input("Skriv inn et tall: "))
except ValueError:
    print("Det er ikke et tall!")
```

## Arbeid med Strenger

Strenger i Python kan manipuleres på forskjellige måter, for eksempel gjennom å bruke indeksering eller funksjoner.

```python
message = "Hei, verden!"
print(message[0])  # Utskrift: H
print(message.lower())  # Utskrift: hei, verden!
```

Med disse grunnleggende konseptene skal du være godt rustet til å starte med Python-programmering og løse varierte oppgaver.

## Importering av Moduler

I Python kan du utvide funksjonaliteten i dine programmer ved å importere moduler. En modul er en fil som inneholder Python-kode. Noen moduler er innebygde, mens andre kan installeres fra tredjeparter.

### Hvordan Importere

For å importere en modul bruker du `import`-nøkkelordet. Du kan også importere spesifikke funksjoner fra en modul.

```python
import math
print(math.sqrt(16))  # Utskrift: 4.0

from datetime import datetime
print(datetime.now())  # Utskrift: (nåværende dato og tid)
```

### Bruk av Alias

Du kan gi en modul et alias for å forenkle koden.

```python
import math as m
print(m.sqrt(25))  # Utskrift: 5.0
```

## Arbeid med Strenger (Utvidet)

Strenger i Python er svært fleksible og kan manipuleres på mange måter.

### Slicing

Du kan "slice" strenger for å hente ut deler av dem.

```python
text = "Python er gøy!"
print(text[7:9])  # Utskrift: er
```

### Finn og Erstatt

Finn understrenger og erstatt dem med noe annet.

```python
message = "Hei verden"
new_message = message.replace("verden", "alle")
print(new_message)  # Utskrift: Hei alle
```

### Formatering

Python tilbyr flere måter å formatere strenger på, noe som er nyttig for å bygge dynamiske meldinger.

```python
name = "Anna"
age = 25
print(f"{name} er {age} år gammel.")  # Utskrift: Anna er 25 år gammel.
```

## Grunnleggende om Feil og Unntak

Når du programmerer, vil du uunngåelig møte feil. Å forstå forskjellene mellom syntaksfeil og unntak er viktig.

- **Syntaksfeil** oppstår når Python ikke forstår koden på grunn av skrivefeil eller feil i koden din.
- **Unntak** oppstår når koden er syntaktisk korrekt, men programmet støter på en feil under utførelsen.

Lær hvordan du bruker `try` og `except` for å håndtere unntak slik at programmet ditt kan reagere på feil på en kontrollert måte.

## Løkker (Utvidet)

### For-løkker med Lister

For-løkker er ideelle for å iterere over elementer i en liste.

```python
fruits = ["eple", "banan", "kirsebær"]
for fruit in fruits:
    print(fruit)
```

### While-løkker med Betingelser

While-løkker fortsetter å kjøre så lenge en betingelse er sann.

```python
number = 5
while number > 0:
    print(number)
    number -= 1
```
