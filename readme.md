# Listakezelő függvények gyakorlás

## Specifikáció

jelenítsük meg a listánkat táblázatban,majd a listát tudjuk rendezni pl név szerint ha rákattintunk a táblázat fejlécére akkor rendezze be a táblázat sorait. tudjunk szűrni név alapján 
tudjunk új adatot hozzáadni
tudjunk törölni a táblázat egy sorát.

## Metódusok 

1. **htmlOszzeallit(lista)->txt** | összelátja a táblázat html szerkezetét egy szöveges változóba
2. **megjelenit(txt)->megjelenit** egyadott html elemben paraméterben kapott szzöveget
3. **rendez(lista)-> rendezettlista** a paraméterben kapott listát név szerint megrendezi
4. **adathozzáadás(lista) -> kibővítettlista** | ősszegyűjti az űrlapról az adatokat és összeállít belőlük  egy objektumot majd azt beleteszi listába
5. **torol(lista,id)->tlista** | kitörli a listából az adott id-jű elemet.
Akkor fog lefutni,ha a sor melletti töröl gombra kattintunk.
6. **szűrés(lista,keresoszoveg) -> szűrtlista** | a keresőmezőbe beírt szöveget keresi a lista objektumainak név mezőjében,mindez akkor fut le ha beírunk valamit a keresőmezőbe