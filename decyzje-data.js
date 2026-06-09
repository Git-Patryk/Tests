/* Decyzje i ryzyko — fiszki do trybu Nauka (active recall).
   Autorskie, na podstawie notatki decyzje.html. */
window.RECALL_DECK = {
  meta: {
    title: "Decyzje i ryzyko",
    icon: "🎲",
    accent: "#14b8a6",
    accent2: "#0d9488",
    hub: "swps-decyzje.html",
    hubName: "Decyzje i ryzyko",
    key: "decyzje_recall_v1",
    testHref: "decyzje-testy.html",
    cats: [
      {id:"S1", label:"1 · Dwa systemy"},
      {id:"S2", label:"2 · Pomiar myślenia"},
      {id:"S3", label:"3 · Heurystyki i błędy"},
      {id:"S4", label:"4 · Teoria perspektywy"},
      {id:"S5", label:"5 · Postawy wobec ryzyka"},
      {id:"S6", label:"6 · Maks. vs satysfakcja"},
      {id:"S7", label:"7 · Komunikowanie ryzyka"},
      {id:"S8", label:"8 · Nudging vs boosting"}
    ]
  },
  cards: [
    {id:"S1-1", sec:"S1", f:"Kto wprowadził pojęcie dwóch systemów myślenia, a kto je spopularyzował?", b:"Wprowadzili Keith Stanovich i Richard West; spopularyzowali Daniel Kahneman i Amos Tversky."},
    {id:"S1-2", sec:"S1", f:"Czym charakteryzuje się System 1?", b:"Szybki, automatyczny, intuicyjny, nieświadomy; działa w tle bez poczucia kontroli; opiera się na skojarzeniach, wrażeniach i emocjach."},
    {id:"S1-3", sec:"S1", f:"Czym charakteryzuje się System 2?", b:"Wolny, kontrolowany, refleksyjny, świadomy; wysiłkowy, wymaga uwagi; opiera się na regułach logicznych i analitycznych."},
    {id:"S1-4", sec:"S1", f:"Kiedy aktywuje się System 2?", b:"Gdy System 1 napotyka trudność i nie zna odpowiedzi, gdy coś zaskakuje (sprzeczne z modelem rzeczywistości — niewidzialny goryl), oraz przy samokontroli."},
    {id:"S1-5", sec:"S1", f:"Co wzmacnia dominację Systemu 1, a co Systemu 2?", b:"System 1: zajętość poznawcza, rozproszenie, presja czasu, dobry nastrój. System 2: ważność decyzji, znaczenie osobiste, rozliczanie przez innych (Samson i Voyer)."},
    {id:"S1-6", sec:"S1", f:"Zadanie Lindy — na czym polega błąd?", b:"Błąd koniunkcji: „kasjerka-feministka” wydaje się bardziej prawdopodobna niż sama „kasjerka”, choć koniunkcja nie może być bardziej prawdopodobna niż pojedyncze zdarzenie."},
    {id:"S1-7", sec:"S1", f:"Kij i piłka kosztują razem 1,10 zł, kij o 1 zł droższy — ile kosztuje piłka?", b:"5 groszy (kij 1,05 zł, razem 1,10 zł). Intuicyjne „10 groszy” to błędna odpowiedź Systemu 1."},

    {id:"S2-1", sec:"S2", f:"Co mierzy CRT (test refleksji poznawczej)?", b:"Zdolność stłumienia intuicyjnej, błędnej odpowiedzi Systemu 1 i uruchomienia Systemu 2 — jak uważnie System 2 monitoruje sugestie S1. Frederick (2005), 3 pytania."},
    {id:"S2-2", sec:"S2", f:"Jaką trafność prognostyczną ma CRT?", b:"Niższe wyniki = większa podatność na heurystyki, trudności z odroczeniem gratyfikacji i samokontrolą (Frederick 2005; Toplak i in. 2011)."},
    {id:"S2-3", sec:"S2", f:"Czym są zdolności numeryczne i jak się je mierzy?", b:"Rozumienie prawdopodobieństwa, proporcji i informacji statystycznych; Berliński Test Numeryczny (Cokely i in. 2012). Z CRT koreluje r = 0,34–0,59."},
    {id:"S2-4", sec:"S2", f:"Co cechuje osoby o wysokich zdolnościach numerycznych?", b:"Lepsze decyzje zdrowotne i finansowe, bardziej liniowe przekształcanie wartości, większa wrażliwość na prawdopodobieństwo, mniejsza podatność na wpływy afektywne."},
    {id:"S2-5", sec:"S2", f:"Co mierzy kwestionariusz REI-40 (Pacini & Epstein)?", b:"40 stwierdzeń (Likert), dwa style myślenia: racjonalny (≈ System 2) i doświadczeniowy (≈ System 1), każdy w dwóch podskalach (zdolność + zaangażowanie)."},

    {id:"S3-1", sec:"S3", f:"Czym jest heurystyka?", b:"Uproszczona reguła wnioskowania stosowana nieświadomie — „skrót” zmniejszający złożoność osądu i wyboru (często niedoskonały)."},
    {id:"S3-2", sec:"S3", f:"Czym jest błąd poznawczy (bias) i czym różni się od heurystyki?", b:"Systematyczny (powtarzalny) błąd wynikający z polegania na heurystykach — luka między normą a wynikiem heurystyki. Heurystyka = skrót; bias = jego systematyczny skutek."},
    {id:"S3-3", sec:"S3", f:"Co oznacza WYSIATI?", b:"„What You See Is All There Is” — System 1 buduje spójne historie z dostępnych fragmentów, niewrażliwy na ilość i jakość informacji; źródło nadmiernej pewności siebie."},
    {id:"S3-4", sec:"S3", f:"Na czym polega heurystyka dostępności?", b:"Ocena prawdopodobieństwa wg łatwości przypomnienia — żywe, medialne, świeże przykłady wydają się częstsze (przecenianie ryzyka katastrof lotniczych)."},
    {id:"S3-5", sec:"S3", f:"Na czym polega heurystyka reprezentatywności?", b:"Ocena wg podobieństwa do „typowego” przypadku (Linda, Jan). Bywa trafna, ale ignoruje stopę bazową i wielkość próby."},
    {id:"S3-6", sec:"S3", f:"Na czym polega heurystyka afektu?", b:"Zamiast analizy „za i przeciw” umysł pyta „co czuję wobec X?”. Dobry nastrój → widzimy korzyści; zły → zagrożenia."},
    {id:"S3-7", sec:"S3", f:"Na czym polega zakotwiczenie (anchoring)?", b:"Pierwsza liczba lub sugestia („kotwica”) wpływa na późniejszą ocenę (koło fortuny i % krajów afrykańskich w ONZ; ceny domów u agentów)."},
    {id:"S3-8", sec:"S3", f:"Iluzja kontroli?", b:"Przecenianie własnego wpływu na zdarzenia losowe (mocniejsze rzucanie kostką dla wyższych liczb; „panuję nad rynkiem”) — Langer (1975)."},
    {id:"S3-9", sec:"S3", f:"Błąd konfirmacji?", b:"Szukanie i interpretowanie dowodów potwierdzających przekonania, ignorowanie kontrdowodów (Lord i in. 1979; teorie spiskowe)."},
    {id:"S3-10", sec:"S3", f:"Czym jest regresja (powrót) do średniej?", b:"Skrajne wyniki w pierwszym pomiarze zwykle zostają zastąpione bliższymi średniej, bo skrajny rezultat to w dużej mierze przypadek. Ignorowanie → przecenianie wyjątkowych osiągnięć."},
    {id:"S3-11", sec:"S3", f:"Złudzenie gracza vs efekt gorącej ręki?", b:"Gracza: po serii czarnych „musi” wypaść czerwone (ignorowanie niezależności; Monte Carlo 1913). Gorąca ręka: kto wygrywa, ma rzekomo większą szansę dalej — to mit (Gilovich i in. 1985)."},
    {id:"S3-12", sec:"S3", f:"Dlaczego po 9 reszkach z rzędu kolejny rzut ma p = 50%?", b:"Moneta „nie pamięta” historii — zdarzenia są niezależne. Choć 10 reszek z góry ma p = 1/1024, to po 9 reszkach kolejny rzut nadal ma p = 50%."},

    {id:"S4-1", sec:"S4", f:"Kto i kiedy stworzył teorię perspektywy?", b:"Daniel Kahneman i Amos Tversky (1979). Kahneman otrzymał za nią Nagrodę Nobla z ekonomii w 2002 r. (Tversky już nie żył)."},
    {id:"S4-2", sec:"S4", f:"Kim są „ekoni” / homo economicus?", b:"Racjonalny, samolubny uczestnik rynku o stałych preferencjach z klasycznej teorii oczekiwanej użyteczności; termin „ekoni” ukuł Richard Thaler."},
    {id:"S4-3", sec:"S4", f:"Cztery filary teorii perspektywy?", b:"(1) Strata bardziej boli niż zysk cieszy; (2) ważenie prawdopodobieństw (przecenianie niskich, niedoszacowanie średnich/wysokich); (3) punkt odniesienia = zysk → awersja do ryzyka; (4) punkt odniesienia = strata → skłonność do ryzyka."},
    {id:"S4-4", sec:"S4", f:"Czemu ludzie nadają wartości — stanowi posiadania czy zyskom i stratom?", b:"Zyskom i stratom względem punktu odniesienia, a nie stanowi posiadania. To punkt odniesienia decyduje o nastawieniu do ryzyka."},
    {id:"S4-5", sec:"S4", f:"Jaki jest typowy współczynnik awersji do strat?", b:"Zysk musi być ~1,5–2,5× większy od straty, by zrównoważyć ryzyko (typowo ok. 200 zł, by zaakceptować ryzyko straty 100 zł)."},
    {id:"S4-6", sec:"S4", f:"Efekt utopionych kosztów (sunk cost)?", b:"Ze strachu przed zmarnowaniem dotychczasowego wkładu inwestujemy jeszcze więcej, by go „obronić” (granie „aż się odkuję”; „skoro już tyle poświęciłem…”)."},

    {id:"S5-1", sec:"S5", f:"Czy istnieje ogólna skłonność do ryzyka (Tyszka & Domurat 2004)?", b:"Nie — struktura jest wielowymiarowa, 4 dziedziny: Z (zdrowotne/konsumenckie), S (społeczne), F (finansowe), A (antycypacyjne)."},
    {id:"S5-2", sec:"S5", f:"Która zmienna wpływa na ryzyko we wszystkich dziedzinach?", b:"Płeć — mężczyźni podejmują więcej ryzyka we wszystkich czterech dziedzinach (jedyna zmienna działająca wszędzie; por. Byrnes i in. 1999)."},
    {id:"S5-3", sec:"S5", f:"Co to BART?", b:"Balloon Analog Risk Task — behawioralne zadanie: pompowanie balonu po nagrodę aż do pęknięcia. Palacze i ryzykowni kierowcy pompują więcej (wyższa skłonność do ryzyka)."},
    {id:"S5-4", sec:"S5", f:"Co to DOSPERT?", b:"Kwestionariuszowy pomiar postaw wobec ryzyka w różnych domenach (miara deklaratywna)."},
    {id:"S5-5", sec:"S5", f:"Na czym polega problem miar deklaratywnych vs behawioralnych?", b:"Często dają różne tendencje. MacCrimmon & Wehrung (1990) — 509 dyrektorów, różne miary dawały różny wynik. Warneryd (1996) — deklaracje bez związku z realnym portfelem."},
    {id:"S5-6", sec:"S5", f:"Cztery warianty stosunku do ryzyka (macierz zysk/strata × prawdopodobieństwo)?", b:"ZYSK + duże p → awersja (bierzemy pewne); ZYSK + małe p → skłonność (pozew jak los na loterii); STRATA + duże p → skłonność (walczy dalej); STRATA + małe p → awersja (ugoda = „zakup ubezpieczenia”)."},

    {id:"S6-1", sec:"S6", f:"Maksymalizacja vs reguła satysfakcji — na czym polegają?", b:"Maksymalizacja: szukanie opcji obiektywnie najlepszej (żmudne porównania, lęk, żal). Satysfakcja (satisficing): akceptacja opcji „wystarczająco dobrej” (krótki przegląd, mniej stresu). Pojęcie: Herbert Simon."},
    {id:"S6-2", sec:"S6", f:"Konsekwencje maksymalizacji dla dobrostanu?", b:"Maksymalizatorzy częściej wybierają obiektywnie lepsze opcje, ale częściej czują niezadowolenie i żal (Schwartz 2002). Mają lepsze „twarde” wskaźniki (pensja), niekoniecznie wyższą satysfakcję (Parker i in. 2007)."},

    {id:"S7-1", sec:"S7", f:"Ryzyko względne vs bezwzględne?", b:"Względne zniekształca i wzmacnia percepcję („podwaja ryzyko”); bezwzględne (częstości naturalne) pokazuje realną skalę. Pigułki UK 1995: wzrost z 1 na 7000 do 2 na 7000 kobiet."},
    {id:"S7-2", sec:"S7", f:"Czym jest framing (efekt ramowania)?", b:"Te same dane inaczej ujęte dają różne decyzje. Lekarze: „90% przeżycia” → 84% wybrało operację; „10% śmiertelności” → tylko 50% (Tversky & Kahneman)."},
    {id:"S7-3", sec:"S7", f:"Na czym polega cherry picking?", b:"Pokazanie fragmentu danych zamiast całości, dobór korzystnego przedziału („globalne ocieplenie zatrzymało się” — wybrano lata 1997–2012 zamiast pełnego trendu)."},
    {id:"S7-4", sec:"S7", f:"Jak manipuluje się osią Y wykresu?", b:"Rozciągnięta skala osi obejmuje nadmiernie szeroki zakres → realne zmiany wydają się płaskie i nieistotne (umniejszanie problemu)."},

    {id:"S8-1", sec:"S8", f:"Dwie szkoły racjonalności i ich aplikacje?", b:"Szkoła Heurystyk Prostych (Gigerenzer) — racjonalność ekologiczna, aplikacja: boosting. Szkoła Heurystyk i Błędów (Kahneman & Tversky) — systematyczne błędy, aplikacja: nudging."},
    {id:"S8-2", sec:"S8", f:"Czym jest nudging?", b:"Kierowanie zachowania ku wyznaczonym opcjom bez zakazów i bez usuwania opcji; działa na architekturę sytuacji decyzyjnej (Thaler & Sunstein 2008; nurt Kahnemana & Tversky'ego)."},
    {id:"S8-3", sec:"S8", f:"Czym jest boosting?", b:"Wzmacnianie kompetencji decydenta, by mógł świadomie zdecydować; buduje trwałą umiejętność, nie tylko jednorazowy wybór (Hertwig & Grüne-Yanoff 2016; nurt Gigerenzera)."},
    {id:"S8-4", sec:"S8", f:"Save More Tomorrow / PPK — mechanizmy pokonujące bariery oszczędzania?", b:"Zapis jako opcja domyślna (opt-out), start oszczędzania w przyszłości, start przy pierwszej podwyżce, wzrost kwoty z każdą kolejną podwyżką. ~70% zaczyna w 1. roku (Thaler & Benartzi 2004)."},
    {id:"S8-5", sec:"S8", f:"Model EAST (BIT) — co oznacza skrót?", b:"Easy (łatwo), Attractive (przyciągaj), Social (wymiar społeczny), Timely (odpowiedni moment) — cztery zasady projektowania nudge'ów."},
    {id:"S8-6", sec:"S8", f:"EAST „Social”: norma opisowa vs nakazowa?", b:"Opisowa (deskryptywna) = co inni faktycznie robią; nakazowa = jak należy postępować. Listy podatkowe BIT „sąsiedzi płacą na czas” → +5% wpłat (Hallsworth i in. 2017)."},
    {id:"S8-7", sec:"S8", f:"Na czym polega pułapka normy społecznej?", b:"Podawanie niskiego odsetka osób robiących coś źle („tylko 11% rzuca niedopałki”) może działać odwrotnie — zachęca do dołączenia do mniejszości. Lepiej podkreślać normę większości („89% nie rzuca”)."},
    {id:"S8-8", sec:"S8", f:"Efekt Peltzmana?", b:"Gdy postrzegane bezpieczeństwo rośnie, podejmujemy bardziej ryzykowne zachowania (pasy bezpieczeństwa → szybsza jazda)."},
    {id:"S8-9", sec:"S8", f:"Implementacja intencji (Gollwitzer 1999)?", b:"Gotowy schemat „Jeśli/Gdy X, to wówczas Y” — boost wspierający realizację celów (np. ograniczanie dotykania twarzy)."}
  ]
};
