with open("sygnaly.txt") as f:
    slowa = [linia.strip() for linia in f]

wyniki = []

# --- Zadanie 4.1 ---
napis = ""
for i in range(39, len(slowa), 40):
    napis += slowa[i][9]

wyniki.append("4.1. " + napis)

# --- Zadanie 4.2 ---
max_rozne = 0
naj_slowo = ""

for s in slowa:
    rozne = len(set(s))
    if rozne > max_rozne:
        max_rozne = rozne
        naj_slowo = s

wyniki.append(f"4.2. {naj_slowo} {max_rozne}")

# --- Zadanie 4.3 ---
def ok(s):
    for i in range(len(s)):
        for j in range(len(s)):
            if abs(ord(s[i]) - ord(s[j])) > 10:
                return False
    return True

wyniki.append("4.3.")
for s in slowa:
    if ok(s):
        wyniki.append(s)

# zapis do pliku
with open("wyniki4.txt", "w") as f:
    for w in wyniki:
        f.write(w + "\n")