/* Zaawansowana metodologia badań — fiszki do trybu Nauka (active recall).
   Autorskie, na podstawie notatki metodologia.html (wykłady + lektury). */
window.RECALL_DECK = {
  meta: {
    title: "Zaawansowana metodologia badań",
    icon: "🔬",
    accent: "#3b82f6",
    accent2: "#2563eb",
    hub: "swps-metodologia.html",
    hubName: "Metodologia",
    key: "metodologia_recall_v1",
    testHref: "metodologia-testy.html",
    cats: [
      {id:"M1", label:"1 · Fundamenty nauki"},
      {id:"M2", label:"2 · Schematy i zmienne"},
      {id:"M3", label:"3 · Trafność i rzetelność"},
      {id:"M4", label:"4 · Artefakty"},
      {id:"M5", label:"5 · Replikacja i Open Science"},
      {id:"M6", label:"6 · Wnioskowanie statystyczne"},
      {id:"M7", label:"7 · Sondaże i dobór próby"},
      {id:"M8", label:"8 · Analizy i integracja"}
    ]
  },
  cards: [
    {id:"M1-1", sec:"M1", f:"Czym jest nauka wg metodologii?", b:"Zdyscyplinowaną ciekawością — zamienia intuicje w testowalne twierdzenia. Teoria bez badań = spekulacja (Freud); badania bez teorii = bezsensowne zbieranie danych. Nauka zaczyna się od przewidywania (hipotezy)."},
    {id:"M1-2", sec:"M1", f:"5 pytań metodologa (sekwencja)?", b:"Hipoteza → operacjonalizacja (konstrukty → wskaźniki) → projekt (korelacja/eksperyment/quasi) → zagrożenia trafności → wiarygodność i replikowalność."},
    {id:"M1-3", sec:"M1", f:"Hipoteza katharsis (Bushman i in. 1999) — czego dowodzi?", b:"Bijący w worek byli BARDZIEJ agresywni, nie mniej. Intuicja „trzeba się wyładować” nie wystarcza — teorie trzeba testować eksperymentalnie."},
    {id:"M1-4", sec:"M1", f:"Trzy warunki przyczynowości Hume'a?", b:"Bliskość w czasie/przestrzeni, następstwo czasowe (X przed Y), stała koniunkcja. Są konieczne, ale niewystarczające (kogut i słońce, lody i utonięcia — zmienna trzecia: upał)."},
    {id:"M1-5", sec:"M1", f:"Indukcja eliminacyjna Bacona?", b:"Systematyczne tablice: obecności (skutek występuje), nieobecności (nie występuje), stopniowalności (w różnym stopniu). Przyczynę „odsiewamy” przez eliminację kandydatów. Bacon = ojciec nowoczesnej metody naukowej."},
    {id:"M1-6", sec:"M1", f:"Trzy kanony indukcji Milla?", b:"Zgodności (różne sytuacje, zawsze ten sam czynnik → przyczyna), różnicy (sytuacje różnią się tylko jednym czynnikiem), zmian towarzyszących (zmiana jednej zmiennej pociąga zmianę drugiej)."},
    {id:"M1-7", sec:"M1", f:"Kanon jedynej różnicy jako fundament eksperymentu?", b:"Jedyną systematyczną różnicą między grupą eksperymentalną a kontrolną jest manipulacja zmienną NIEZALEŻNĄ. To logiczny prototyp grupy kontrolnej."},
    {id:"M1-8", sec:"M1", f:"Na czym polega falsyfikacja Poppera?", b:"Nie da się udowodnić teorii — można jedynie próbować ją obalić. Asymetria: jeden kontrprzykład falsyfikuje, ale nigdy nie dowiedziemy prawdziwości w 100%."},
    {id:"M1-9", sec:"M1", f:"Twierdzenie naukowe vs nienaukowe?", b:"Naukowe: można sfalsyfikować, wiąże się z ryzykiem („stres obniża pamięć krótkotrwałą”). Nienaukowe: nie da się obalić, zawsze „się dopasuje” („każde zachowanie wynika z nieświadomych popędów”)."},
    {id:"M1-10", sec:"M1", f:"Efekt Barnuma (Forer 1949)?", b:"Skłonność do uznawania ogólnych, nieprecyzyjnych opisów za trafne i spersonalizowane („to brzmi dokładnie jak ja!”). Bazują na nim horoskopy — zdania powszechne, z „ale”, mieszające cechy."},

    {id:"M2-1", sec:"M2", f:"Trzy schematy badawcze?", b:"Eksperymentalny (badacz manipuluje ZN i kontroluje warunki — jedyny pozwala wnioskować o przyczynowości), quasi-eksperymentalny (oddziaływanie poza kontrolą badacza), korelacyjny (relacje między zmiennymi, słabe wnioskowanie przyczynowe)."},
    {id:"M2-2", sec:"M2", f:"Badania opisowe vs wyjaśniające?", b:"Opisowe: jak często / jak wygląda (sondaże, badania przekrojowe, studium przypadku H.M.). Wyjaśniające: dlaczego, jaki mechanizm (eksperymenty, modele statystyczne, badania podłużne)."},
    {id:"M2-3", sec:"M2", f:"Randomizacja I vs II stopnia?", b:"I stopnia: losowy dobór osób z populacji → reprezentatywność (trafność zewnętrzna). II stopnia: losowy dobór do warunków eksperymentalnych → równoważność grup (trafność wewnętrzna)."},
    {id:"M2-4", sec:"M2", f:"Czy randomizacja I stopnia jest warunkiem definicyjnym eksperymentu?", b:"Nie — w psychologii rzadko ją spełniamy (badamy studentów, ochotników), a mimo to są to eksperymenty, tyle że z ograniczoną trafnością zewnętrzną. Warunkiem jest randomizacja II stopnia."},
    {id:"M2-5", sec:"M2", f:"Eksperyment laboratoryjny vs naturalny?", b:"Laboratoryjny: silna kontrola zmiennych, ale niska trafność ekologiczna (sytuacja sztuczna). Naturalny: słaba kontrola, ale wysoka trafność ekologiczna."},
    {id:"M2-6", sec:"M2", f:"Superiority vs non-inferiority?", b:"Superiority: chcemy udowodnić, że oddziaływanie jest istotnie LEPSZE. Non-inferiority: że jest przynajmniej NIE GORSZE (np. rozmowa zamiast psychoterapii)."},
    {id:"M2-7", sec:"M2", f:"Pomiar między- vs wewnątrzosobowy?", b:"Między osobami: grupy niezależne (brak efektu uczenia/zmęczenia, łatwiej ukryć cel, ale potrzeba więcej badanych). Wewnątrz osób: powtarzany pomiar tych samych osób (mniej osób, większa kontrola, ale efekt zmęczenia i uczenia)."},
    {id:"M2-8", sec:"M2", f:"Mediator vs moderator?", b:"Mediator: odpowiada DLACZEGO zależność występuje (zmienna pośrednicząca, łańcuch X→M→Y). Moderator: KIEDY / NA KOGO efekt działa (czynnik decydujący o sile/kierunku zależności)."},
    {id:"M2-9", sec:"M2", f:"Jak rozpoznać mediację i moderację w opisie badania?", b:"„...a to krótszy sen pogarsza pamięć” (łańcuch X→M→Y) = mediacja. „Efekt jest szczególnie wyraźny u osób z...” / „zależy od poziomu...” = moderacja (np. samoocena, mikrobiota, płeć kandydata)."},

    {id:"M3-1", sec:"M3", f:"Czym jest trafność?", b:"Stopień, w jakim badanie mierzy to, co miało mierzyć, i pozwala na poprawne wnioskowanie. Termometr zawyżający o 2° jest rzetelny (konsekwentny), ale nietrafny."},
    {id:"M3-2", sec:"M3", f:"Cztery rodzaje trafności?", b:"Wewnętrzna (czy efekt wynika z manipulacji ZN), zewnętrzna (uogólnienie na inne osoby/sytuacje), pomiaru/konstruktu (czy narzędzie mierzy dane zjawisko), ekologiczna (czy warunki przypominają realne życie)."},
    {id:"M3-3", sec:"M3", f:"Jak badać trafność pomiaru (konstruktu)?", b:"Treściowa (eksperci oceniają pokrycie konstruktu), teoretyczna (zbieżna — koreluje z testami tego samego; różnicowa — nie koreluje z czymś innym), kryterialna (równoczesna i predykcyjna)."},
    {id:"M3-4", sec:"M3", f:"Wynik obserwowany = ? (Spearman 1904)", b:"X obserwowany = T (wynik prawdziwy) + E (błąd). Błąd to „szum”, który nie jest istotą mierzonego konstruktu. „The true score is a fiction — a necessary one”."},
    {id:"M3-5", sec:"M3", f:"Błąd losowy vs systematyczny?", b:"Losowy: działa w różne strony, „rozmywa” wyniki → obniża rzetelność. Systematyczny: stałe przekłamanie (źle skalibrowana waga, tendencja zgadzania się) → obniża trafność, nie musi obniżać rzetelności."},
    {id:"M3-6", sec:"M3", f:"Jak diagnozować błąd pomiaru i rzetelność?", b:"α Cronbacha (rzetelność), test–retest (stabilność), formy równoległe, zgodność sędziów (ICC / κ Cohena), SEM, korekta Spearmana, modele SEM."},
    {id:"M3-7", sec:"M3", f:"Błąd qui pro quo („ten zamiast tego”)?", b:"Błąd nieporozumienia: badany i badacz rozumieją to samo słowo inaczej („często”, „dochód” brutto/netto, „rodzeństwo” przyrodnie?). Skutek: systematyczny błąd, spadek trafności. Zapobieganie: pilotaż, precyzyjne definicje i ramy czasowe."},

    {id:"M4-1", sec:"M4", f:"Czym jest efekt placebo (Bąbel)?", b:"Metoda bez specyficznego działania, która wpływa na efekt przez kontekst, formę podania, zachowanie personelu i przekazane informacje. Nie daje wyłącznie poprawy — może też szkodzić (nocebo)."},
    {id:"M4-2", sec:"M4", f:"Mechanizmy działania placebo?", b:"Oczekiwania (zmieniają doznania, fizjologię, zachowanie), warunkowanie klasyczne (bodźce towarzyszące leczeniu same wywołują reakcję), lęk (zwłaszcza w bólu — obniżenie lęku zmniejsza ból)."},
    {id:"M4-3", sec:"M4", f:"Balanced placebo design — alkohol (Marlatt 1973), wniosek?", b:"Krzyżuje dwa czynniki: co dostał × co myśli, że dostał. O ilości wypitego i ocenie zawartości alkoholu decydował instructional set (przekonanie), a nie realna obecność alkoholu — „utrata kontroli” nie wynikała z samego alkoholu."},
    {id:"M4-4", sec:"M4", f:"Czym jest regresja do średniej?", b:"Zjawisko statystyczne: po skrajnym wyniku kolejny pomiar jest zwykle bliższy średniej (losowe fluktuacje, nie trwała zmiana). Do lekarza trafiamy przy najsilniejszych objawach → poprawa nastąpi nawet bez leczenia."},
    {id:"M4-5", sec:"M4", f:"Z czego składa się „odpowiedź placebo”?", b:"Właściwy efekt placebo + regresja do średniej + spontaniczna poprawa + błąd pomiaru + zmiana raportowania. Nie każda poprawa „po placebo” jest efektem placebo."},
    {id:"M4-6", sec:"M4", f:"Badanie Rosenhana (1973) „On Being Sane in Insane Places”?", b:"8 zdrowych pseudopacjentów z jednym objawem przyjęto z diagnozą schizofrenii, wypisano „w remisji”. Działały: błąd konfirmacji, efekt etykietowania, błąd atrybucji (zachowania tłumaczono zaburzeniem, nie sytuacją)."},
    {id:"M4-7", sec:"M4", f:"Rosenhan a błędy I i II rodzaju (H₀: wszyscy zdrowi)?", b:"I część (u zdrowych wszędzie widzieli chorobę = odrzucenie prawdziwej H₀) = błąd I rodzaju. II część (nie dostrzegli choroby, wszędzie symulanci) = błąd II rodzaju."},

    {id:"M5-1", sec:"M5", f:"Typy replikacji?", b:"Bezpośrednia (nic się nie zmienia, nowe dane), rozszerzona/konceptualna (zmiana elementów metody, nowe dane), re-analiza (inne metody analizy, te same dane), weryfikacja (te same metody i te same dane)."},
    {id:"M5-2", sec:"M5", f:"Bem (2011) vs Galak (2012) — „feeling the future”?", b:"Bem opisał wyniki sugerujące prekognicję. Galak zrobił 7 bezpośrednich replikacji — tylko 1 potwierdziła. Pojedynczy, nawet istotny wynik nie jest mocnym dowodem; nadzwyczajne twierdzenia wymagają nadzwyczajnych dowodów."},
    {id:"M5-3", sec:"M5", f:"Kryzys replikacyjny (Open Science Collaboration 2015)?", b:"Replikacja 100 badań odtworzyła ok. 50% efektów. Przyczyny: małe próby i niska moc, publication bias (łatwiej publikować wyniki pozytywne), przecenianie pojedynczych istotnych wyników, rzadkie bezpośrednie replikacje."},
    {id:"M5-4", sec:"M5", f:"Czym jest SMAR (Wojciszke)?", b:"Systematycznie Modyfikowane AutoReplikacje — ten sam zespół wielokrotnie powtarza badanie, celowo modyfikując próbę, metody pomiaru i zmienne, by pokazać stabilność efektu mimo zmian procedury."},
    {id:"M5-5", sec:"M5", f:"Florida effect / priming (Bargh 1996) i jego los?", b:"Priming stereotypu „osoby starszej” miał spowalniać chód w korytarzu. Autoreplikacje (Doyen 2012, duże N, prerejestracja) — efekt się nie pojawia. Primingi semantyczne bywają stabilne, primingi zachowania często nie."},
    {id:"M5-6", sec:"M5", f:"Czym jest prerejestracja?", b:"Publiczne przedstawienie planu badania przed zebraniem danych (hipotezy, plan doboru, narzędzia, analizy — np. na OSF). Oddziela konfirmację od eksploracji, chroni przed HARKing, umożliwia publikację wyników nieistotnych."},
    {id:"M5-7", sec:"M5", f:"Czym jest p-hacking?", b:"Manipulowanie analizami, aż wynik stanie się istotny (p < 0,05): testowanie wielu zmiennych i raportowanie „ładnych”, usuwanie obserwacji, HARKing. Ślad: nadreprezentacja wyników tuż poniżej 0,05 (Head i in. 2015)."},
    {id:"M5-8", sec:"M5", f:"Analiza multiverse (Steegen i in. 2016)?", b:"Przeliczenie wyniku dla WSZYSTKICH rozsądnych kombinacji decyzji analitycznych („ogród rozwidlających się ścieżek”) i pokazanie całego rozkładu wyników — czy efekt jest odporny (robust), czy kruchy (ostrzeżenie przed p-hackingiem)."},
    {id:"M5-9", sec:"M5", f:"Badania multi-analyst (Wagenmakers 2022)?", b:"Wiele niezależnych zespołów analizuje TE SAME dane na to samo pytanie. Dochodzą do różnych wniosków mimo identycznych danych — ujawnia zależność wniosków od analityka (researcher degrees of freedom)."},

    {id:"M6-1", sec:"M6", f:"Rodzaje hipotez?", b:"Zerowa (H₀ — twierdzenie do obalenia) vs alternatywna/badawcza (H₁); kierunkowa (przewiduje kierunek) vs niekierunkowa; teoretyczna (ogólna) vs operacyjna (na poziomie wskaźników)."},
    {id:"M6-2", sec:"M6", f:"Błąd I vs II rodzaju?", b:"I rodzaju (α): odrzucenie PRAWDZIWEJ H₀ — fałszywy alarm, stwierdzamy nieistniejący efekt (częstszy przy zbyt dużych próbach). II rodzaju (β): nieodrzucenie FAŁSZYWEJ H₀ — przeoczony efekt (częstszy przy małych próbach i niskiej mocy)."},
    {id:"M6-3", sec:"M6", f:"Czym JEST, a czym NIE jest p?", b:"p = prawdopodobieństwo uzyskania takiego (lub bardziej skrajnego) wyniku przy założeniu, że H₀ jest prawdziwa. p to NIE prawdopodobieństwo błędu I rodzaju, replikacji ani prawdziwości hipotezy."},
    {id:"M6-4", sec:"M6", f:"Co oznacza p > 0,05?", b:"Tylko że nie możemy odrzucić H₀ — NIE „brak efektu”. Efekt może być mały lub próba za mała. Błąd: „nieistotny wynik = brak efektu”."},
    {id:"M6-5", sec:"M6", f:"Czym jest wielkość efektu?", b:"Miara siły/rozmiaru różnicy lub związku, odporna na wielkość próby (w odróżnieniu od istotności). Cohen's d = (M₁−M₂)/SD pooled; ≈0,2 mały, ≈0,5 średni, ≈0,8 duży."},
    {id:"M6-6", sec:"M6", f:"Czym jest moc statystyczna?", b:"Moc = 1 − β — prawdopodobieństwo wykrycia prawdziwego efektu (standard 0,80). Im silniejszy spodziewany efekt, tym mniejsza potrzebna próba; słaby efekt wymaga dużej próby."},
    {id:"M6-7", sec:"M6", f:"Analiza mocy a priori i uzasadnienie próby?", b:"Znając zakładaną wielkość efektu (SESOI), α i moc, szukamy najmniejszej próby do wykrycia efektu (np. G*Power). „Bo tylu zebraliśmy” nie jest uzasadnieniem — N trzeba powiązać z mocą i wielkością efektu."},
    {id:"M6-8", sec:"M6", f:"Czym jest meta-analiza?", b:"Wystandaryzowana ilościowa synteza wyników wielu niezależnych badań na ten sam temat. Daje precyzyjniejsze wnioski niż jedno badanie, ocenia wielkość efektu, wykrywa błąd publikacyjny. Spór Eysenck vs Smith & Glass (1977)."},
    {id:"M6-9", sec:"M6", f:"Meta-analiza: fixed vs random effects; forest vs funnel plot?", b:"Fixed effects: jeden wspólny efekt prawdziwy. Random effects: dopuszcza zróżnicowanie efektów między badaniami. Forest plot: efekty badań + efekt zbiorczy. Funnel plot: wykrywanie błędu publikacyjnego (asymetria lejka)."},

    {id:"M7-1", sec:"M7", f:"Trzy formy badań samoopisowych?", b:"Sondaże (opinie/postawy na próbie, wnioskowanie o populacji), ankiety (kwestionariusze do samoopisu), analiza danych zastanych/wtórna (reanaliza już zebranych danych do nowych pytań)."},
    {id:"M7-2", sec:"M7", f:"Czym jest sondaż omnibus?", b:"Wielotematyczny sondaż, w którym kilku zleceniodawców dokłada własne pytania do jednej fali na tej samej próbie (instytut robi rekrutację i ważenie). Np. GSS, European Social Survey, Polski Generalny Sondaż Społeczny."},
    {id:"M7-3", sec:"M7", f:"Schemat korelacyjny vs dzienniczkowy vs panelowy?", b:"Korelacyjny/przekrojowy: jeden pomiar wielu zmiennych (brak kierunku). Dzienniczkowy: te same osoby raportują wielokrotnie na bieżąco (wysoka trafność ekologiczna, dane zagnieżdżone). Panelowy: ta sama próba w kolejnych falach (zmiana wewnątrzosobowa)."},
    {id:"M7-4", sec:"M7", f:"Metody doboru próby — losowe vs nielosowe?", b:"Losowe: prosta (złoty standard), warstwowa, klastrowa. Nielosowe: kwotowa (Gallup), kula śnieżna (ukryte populacje, brak reprezentatywności), dogodna/celowa (ograniczone wnioskowanie)."},
    {id:"M7-5", sec:"M7", f:"Czym jest ważenie próby?", b:"Korekta nadreprezentacji grup: jeśli kobiet jest 70% w próbie vs 60% w populacji, nadajemy wagi (K: 0,60/0,70 ≈ 0,857 — „odchudzamy”; M: 0,40/0,30 ≈ 1,333 — doważamy)."},
    {id:"M7-6", sec:"M7", f:"Efekt świeżości vs pierwszeństwa w pytaniach?", b:"Świeżości: wybór ostatniej opcji (zwł. sondaż telefoniczny, silniejszy u starszych). Pierwszeństwa: przy skali na papierze chętniej opcje początkowe."},
    {id:"M7-7", sec:"M7", f:"Typowe źródła błędu w pytaniach ankietowych?", b:"Wieloznaczność/żargon („często”, „regularnie”), pytania podwójne, negacje i podwójne przeczenia, brak ram czasowych/definicji, qui pro quo, filtr aprobaty społecznej (zawyżanie/zaniżanie)."},

    {id:"M8-1", sec:"M8", f:"Czym jest analiza wielopoziomowa (HLM)?", b:"Metoda dla danych o strukturze zagnieżdżonej (hierarchicznej): osoby należą do podgrup — uczniowie w klasach, pracownicy w oddziałach. Efekty zależą nie tylko od jednostki, ale i od kontekstu."},
    {id:"M8-2", sec:"M8", f:"Czym grozi zignorowanie struktury wielopoziomowej?", b:"Użycie tradycyjnych metod przy danych zagnieżdżonych może prowadzić do błędu I rodzaju. Przy danych zagnieżdżonych stosuje się analizę wielopoziomową nawet przy niskim ICC (Nezlek 2012)."},
    {id:"M8-3", sec:"M8", f:"Izolacjonizm vs redukcjonizm (Śpiewak & Kossowska 2008)?", b:"Izolacjonizm: zawężanie badania zjawiska do jednego narzędzia/tradycji teoretycznej. Redukcjonizm: sprowadzanie fenomenów społecznych do elementarnych zjawisk psychicznych. „Mądra integracja” unika obu skrajności."}
  ]
};
