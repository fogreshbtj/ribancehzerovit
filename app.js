const daftarWBP = [
  "YUSTIAR BIN NASIB",
  "RIDWAN BIN HAMDAN",
  "GUSWANTO BIN AWAN SENTOSA",
  "ABD RAHMAN PANJAITAN BIN AWALUDDIN",
  "RADJA HIDAYATULLAH BIN HUSNI",
  "M. RIZKI MUKHALVI BIN MUKLISSUDDIN",
  "IRWAN SYAHPUTRA BIN SUDASONO S",
  "MARIO NALDI BIN NARWANSYAH",
  "AL FAJRUL BIN MARWAN",
  "AFIFUDDIN BIN BAHTIAR",
  "FAISAL AMIR BIN RUSLI ABU BAKAR",
  "KURNIA BIN HASBALAH",
  "T M ABRAR AZIZI BAKTI BIN RUSLIZAR T A",
  "TAKDIR BIN BASRI",
  "SURAL FUADI BIN IBRAHIM",
  "HERMAWAN BIN M. HASAN",
  "ADE SAFRIZAL BIN AHMAD HUSEN",
  "MUHAMMAD NABAWI ALIAS AYI BIN ZULKIFLI DAUD",
  "IDRIS BIN WAHID YAKUB",
  "RAHMAD HIDAYAT BIN ALM RUSDI",
  "MUHAZIR HIDAYAT BIN (ALM) IRWAN",
  "MAHDAN BIN (ALM) MUHAMMAD",
  "FERI SANDRIA BIN SAMSUL BAHRI IBRAHIM",
  "RAHMAD AKBAR BIN ZUBIR",
  "AULIA ADRIASYAH BIN H. UMRAH",
  "ERWIN SAPUTRA BIN M YUSUF",
  "AMIR MUKHTARIM BIN M. ISA",
  "MUHAMMAD NASIR BIN MARKUS",
  "NAZAR MAULANA BIN JUNAIDI",
  "MAULIZAR SAPUTRA BIN NURDIN",
  "AGIL MAULANA BIN SAFRIZAL",
  "Drs. ZAMZAMI BIN BEN HASAN",
  "ZULFIKRI BIN KHAIRUNNAS",
  "YUNI FAHRIZAL BIN ISMAIL LISMA",
  "SANDI PRIMATIA BIN MULIONO",
  "RISKI MUNANDAR BIN (ALM) HASAN",
  "MUSTAQIM BIN ANWAR ISMAIL",
  "MUHAMMAD BASYIR BIN SUSIADI",
  "M. ARIFNUR BIN MINO",
  "HERI SYAHPUTRA BIN AMIR HAMZAH",
  "EVANI BIN RUSLI",
  "ERLANGGA BIN PAIMUN",
  "ARIF ANANDA BIN NURDIN",
  "AMALUDIN BIN ANTO",
  "REZEKI KHALUD SUDIRSAH BIN SUDIRMAN",
  "FADIL MAHYAR BIN AHMADIYAH",
  "RIZKI PERDANA PUTRA BIN M. NUR DAUD",
  "MAHDI BIN ILYAS",
  "LILIK SUHENDRA BIN ALMARHUM SUGITO",
  "GUNAWAR BIN JAKFAR",
  "MUHAMMAD FADHIL BIN MAHDI S",
  "AULIA MAULANA BIN ASRI ISMAIL",
  "ARIF MAULIANA BIN ALM ABDULLAH",
  "REZAL FAHLEVI BIN MUSNADI",
  "MUHAMMAD AFANDI BIN RUDI AFANDI",
  "YUDHA ABDI KURNIAWAN BIN ARIF PRIBADI",
  "HENDRI SAPUTRA BIN BACHTIAR",
  "SURIADY BIN M. JALIL",
  "MUHAMMAD RIZA BIN EFENDI",
  "ZULFURQAN BIN M. RAZI",
  "DEDI RAHMAT BIN (ALM) M. ADAM",
  "YUSNAIDI BIN DIRSUN",
  "TARMIZI BIN M. NUR",
  "MUHAMMAD NADID BIN SULAIMAN",
  "NOVAL AHZHAKI BIN MANSUR",
  "MUHAMMAD ANDI ALIAS AMAD BIN DAHLAN",
  "AMRIZAL BIN (ALM) M. JAMIL",
  "REZKY SYUHADA ALIAS KIKI BIN RIZALSYAH",
  "T. DHIKA RAHMAD BIN HARDI YUZAR",
  "MUHAMMAD IQBAL BIN M. YUSUF AHMAD",
  "DICKI MAULANA BIN YUSUF WAHAB",
  "SUWARZAL BIN (ALM) ZAINAL ABIDIN",
  "MUHAMMAD SYARUL BIN HAZARATUL ASWAD",
  "FARHAN BIN H. JOHAN",
  "DERIANSYAH LUBIS BIN HIDAYAT LUBIS",
  "ABDULLAH BIN SULAIMAN",
  "SAIFUL BIN ILYAS",
  "BONDAN PERKASA BIN SUMARDI",
  "ADNAN BIN M YUSUF ARRAHMAN",
  "AFRIZAL BIN (ALM) RUSLI",
  "WIEN AUFA BIN HAMDAN",
  "MUAZZIN ZULIAN BIN ZULKIFILI PUTEH",
  "SUHATA BIN M. THOMAS TANJUNG",
  "SUPRIADI BIN (ALM) ANWAR",
  "TARMIZI SAFARI BIN SAFARI BASYAH",
  "RAHMAT DANI BIN (ALM) HASAN",
  "MUHAMMAD RAZI BIN RIDWAN",
  "MURSALIN BIN (ALM) M. LIZAN",
  "MURDANI BIN ALM. MUHAMMAD JAMIL",
  "MUNTASIR BIN M. DAUD KAOY",
  "MI'RAJ BIN M YAKOB SABI",
  "DEMMY ADYTIA BIN BACHTIAR MUSA",
  "FAKHRUL FUAD HASAN BIN AHMAD",
  "RAJUL FUADI BIN (ALM) ABDULRAHMAN",
  "M. RONI BIN M. NASIR",
  "AGIEL SAPUTRA BIN MUHAMMAD KASIM",
  "MUHAMMAD RIVAY BIN AMIRUDDIN",
  "M. GOZI ALWAFI BIN ZULKARNAEN",
  "PUTRA RAMADHAN BIN DAHLAN AHMAD",
  "M. HAIKAL BIN ZAMRIADI",
  "ROBI SAPUTRA BIN (ALM) M YUSUF TM",
  "SYAHRUL RAMAZAN BIN M. DAUD",
  "JUNAIDI BIN DAHLAN SULAIMAN",
  "FANNY AGUS YULIANTO BIN ALM SUPARJO",
  "FAHRUL RAZI BIN ZAINAL ABIDIN",
  "MANFUR BIN ALM UMAR",
  "MUHAMMAD WAHYU BIN IRAWAN",
  "SURYA ANDHIKA BIN WASMADI",
  "WAWAN IRWANDA BIN MUCHSIN",
  "ROMY RISKI AFIANDA BIN MUCHTAR",
  "MUNIR BIN ABDUL MAJID",
  "MAHADIE BIN ALM. ANWAR DAUD",
  "NIZAM RABBANI BIN JAMALUDDIN IDRIS",
  "FREDDY KURNIAWAN ALIAS KHO KHAM THUNG BIN KHO KHUE SION",
  "KIKI SYAHPUTRA BIN ALM SUNTORO",
  "IRFADI BIN SUFYAN",
  "SANDI MAULANA BIN ZULKIFLI",
  "M AKBAL BIN ALM ISMAIL",
  "TEGAR AULIA AKBAR BIN MARZUKI",
  "MUKHSIN, S.UD.,M,SI. BIN ALM MUHAMMAD JAM",
  "HERLIN, S.H., M.H BIN HAMDANI",
  "IGOSLI ANANDA BIN RAMLAN",
  "IRHAM HELMI BIN (ALM) HELMI NURUDDIN",
  "FAHRIZAL BIN (ALM) M. TASMAN",
  "ZULBAHRI BIN NURDIN",
  "EFENDI BIN HASBI ABDULLAH",
  "RAJES SAPRIANSYAH PUTRA BIN (ALM) DJAMALUDIN",
  "TARMIZI BIN ALM. RAZALI",
  "JEFRI BIN DAHLAN MAJID",
  "MURSALIN, S.SOS BIN ALM ABDULLAH",
  "DEDI SUKANDAR BIN (ALM) ISKANDAR",
  "MUSLIM IBRAHIM BIN ALM IBRAHIM",
  "RISNANDAR, S.T BIN NURDIN",
  "FAHMI RIZA, S.H BIN (ALM) SOFYAN",
  "DOHAR L. TOBING BIN RUSLI EFENDI TOBING",
  "MISBAHUDDIN BIN M. NASIR NURDIN",
  "IRFANZI BIN ZULKIFLI M. JALAL",
  "KHAIRU ALFISYAHRIN BIN ARMANSYAH.MS",
  "HENDI HARDI HUTABARAT, S.PD., M.PD. BIN M. RUDI HUTABARAT",
  "M. ZAINI BIN ABDULLAH",
  "FIRMANSYAH BIN ALM. MURDANI AZIZ",
  "YUDIANSYAH JAMAL BIN JAMALUDDIN",
  "SYIFAK MUHAMMAD YUS MHSC BIN MUHAMMAD YUS",
  "ASRI BHR BIN ALM BAHARUDDIN",
  "DASWARMI BIN ABDUL WAHAB",
  "MUSLEM BIN SULAIMAN",
  "DR. CHALILI PUTRA,M.KES BIN -",
  "REZA HIDAYAT SYAH,S.IP.MPA BIN -",
  "DR. SYARIDIN, S.PD., M.PD BIN ABDULLAH (ALM)",
  "MUHAMMAD ADILIYANSYAH BIN DASRIL LATIF",
  "RICO DARMAWAN BIN ALM RISWAN",
  "DEDI SAPUTRA BIN ANAK DARI MUSLIM (ALM)",
  "ERFIKA BIN JAILANI",
  "IR DARWILIS BIN TGK. ILYAS",
  "RAHMAD SAPUTRA BIN ZAINUDDIN",
  "SYARYULIS BIN ALM SYUIB",
  "MIFTAHUR RIZKI BIN DONI RAMADHA",
  "SYAIFULLAH BIN ALM. ALI USMAN",
  "SYUKURUDDIN, S.E., M.AP BIN ALM. H. LAKMANA",
  "RAFIANDI BIN MARWAN",
  "RISKI RAJA UBIT BIN JAUHARI",
  "JUNAIDI BIN ANWAR HASAN",
  "HAVAZ BIN WAHIDIN",
  "SAIFUL BAHRI BIN (ALM) SYAHKUBAT",
  "AHMAD KHAIRUL SAFRIL BIN H. RAZALI BUDIMAN (ALM)",
  "ZULKARNAEN BIN M NUR",
  "HERU JUANDA BIN MUCHTAR",
  "AHMAD WAFA BIN ALM MUHAMMAD DAUD REUMANTAN",
  "JUMARIN SOPI ALS JUMARIN BIN ABDUL HAMID",
  "NANDO LUBIS BIN AMIRUDDIN",
  "MUHAMMAD NADIR BIN RAJAB",
  "RAHMAT HIDAYATSYAH BIN MAWARDI",
  "ABDULLAH M BIN MAHMUD",
  "T. ARI GUNAWAN BIN T. SYARIF HAMDANI",
  "RAHMAN SYAHPUTRA BIN (ALM) ZAINAL ARIFIN",
  "TEUKU RISKY AULIA,S.H BIN ALM TEUKU AZWAR",
  "SYAHRIAL BIN ALM. USMAN Z.",
  "AHMALUL FAUZAN BIN MUHAMMAD",
  "HAMIDI BIN RAHMAD",
  "IR. MAHDI AMIN BIN M. AMIN",
  "SUKMA FAUZI BIN SUDAR",
  "M. REJA, S.T.,BIN RUSLI",
  "MUHAMMAD ADIL BIN FITRIADI",
  "SAMUDAHTI BERASA BIN WALLIN BERASA",
  "HARI BIN T. JUNAIDA",
  "M RIZZAL BIN ZULKIFLI",
  "ARIF ARFA PUTRA BIN EKA SYAHPUTRA",
  "SUDARMAN BIN ALM. ABDUL AZIZ",
  "SAHNAN BIN KARMAN",
  "RIDWAN BIN ALM MUHAMMAD HASAN",
  "MUHAMMAD HARIS BIN SUFRIADI YAHYA",
  "ANWAR BIN SULAIMAN DAUD",
  "SARMAN S.Pd.I BIN Alm.H.NYAK KILUN",
  "PUTRA IRWANSYAH BIN RIDWAN YUSUF",
  "FAHRUZAL BIN MAULANA",
  "MUHAMMAD RISKI ALIAS RISKI BIN ALM RIDWAN LUBIS",
  "MUNIRWAN BIN ZULKIFLI",
  "MUHAMMAD ANAFIA BIN ANWAR",
  "FIRMAN ALIAS PIMEN BIN SAFRAN",
  "M. IQBAL BIN M. NUR ABDULLAH",
  "IRMA DARMA BIN (ALM) M. YUSUF",
  "DEDE DWIPAYANA BIN M. YAHYA",
  "LIWA UL HAMDI BIN HAMZAH",
  "M. FAUZI ALS FAUZI BINTANG BIN ALM. JAFAR MUSA",
  "HERYAN PALAWAN BIN ALM. MAHDI",
  "MUHAR ABDUH WAHAB, S.E BIN ALM. SYARIFUDDIN ABD WAHAB",
  "DK. KHALIDIN AMRI BIN ALM. ABD KADIR WAHID",
  "ALIMSYAH BIN ALM. SYARIPUDDIN",
  "SYUKRI BIN MURDANI",
  "BUDI SANTOSO BIN MAHIDIN NAFI",
  "GILANG PERMANA BIN (ALM) SOFYAN ADAM",
  "RIZKI BIN M. NUR",
  "MUHAMMAD FURQAN BIN M. NASIR SANDANG",
  "ALBAKRI BIN ALM JABUDDIN SELIAN",
  "SAFRANI BIN ZULKIFLI",
  "M. FAKHRUL RAMADHAN BIN ABD HADI",
  "MUHAMMAD HAEKAL BIN SURIADI",
  "MUHAMMAD YUSUF BIN ALM M KASIM",
  "RUDI AFRIANTO BIN ANWAR",
  "Tgk. SAHIDUL AKRAM AL HAFIZD BIN ALM. H. Tgk. SYABIRINSYAH",
  "MURDANI BIN HASAN",
  "DWI PUTRA ANANDA RESTU ALIAS SI CHEK ALIAS SI NYAK BIN FADHLI DAUD",
  "MUHAMMAD ANAH BIN RUSLI",
  "SYIAMUDDIN BIN M. AMIR",
  "AGUS SALIM BIN RIDWAN",
  "SYAHRIAL HADITYA, S.P BIN SANUSI A. JALIL",
  "drh. ASRIJAL JUNAIDI BIN (ALM.) UMAR T",
  "ZUL PENDI BIN FARID AMIN",
  "JUNAWAN BIN SUHARTO",
  "MUCHSALMINA BIN NURDIN",
  "SELAMAT ARAGANTI ALIAS ARA BIN (ALM) SYARIFUDDIN",
  "ANDRI RINANDA BIN HERMAN",
  "RAHMAT AKBAR BIN MAKMUR",
  "SAHBUDDIN BIN M. SARIB",
  "M DAUD BIN ABDULLAH",
  "HENDRI SYAHPUTRA BIN ZAKARIA ILYAS",
  "PUTRA HAJI JUMADILLAH BIN RUSLI SABI",
  "IRSYAD YUNAZ FARHAN BIN (ALM) AZWAR BA",
  "ZAMZAMI BIN ALM M. ZAM",
  "M. RIZAL BIN T. RASMUDDIN",
  "CHALIDIN M. ISA BIN (ALM) M. ISA",
  "RIFKI ANANDA BIN ALM. SYAUKANI MUHAMMAD",
  "ZULFITRI BIN ABDUL RAZAK",
  "MUHAMMD AZEEM",
  "TAUFIK HIDAYAT ALIAS TOPIK BIN ALM M. JAMAL",
  "SUPRIADI BIN AMIRUDDIN",
  "RAMLI ALS BANG ADIK BIN M. JUNED",
  "FAKHRIZAL BIN BAKHTIAR",
  "ZULFIKAR ALIAS ANDRE BIN EFENDI",
  "M. THAMRIN BIN TARMIZI",
  "FEGI OCTAVIAN ALFAYET BIN ALI MUHAMMAD",
  "IKRAM BIN ZAKARIA",
  "M. NAUFAL AL FATTA BIN MAKMUR SAPUTRA",
  "IFFAT MUHAMMAD ROZAN BIN HARLI",
  "MUHAMMAD FERDIANSYAH BIN MASHURI",
  "T. SAIFULLAH BIN ALM. T. USMAN",
  "ROY MADANI BIN ABU BAKAR",
  "REZA HARLIANSYAH BIN ALM. ISHAR YUSUF",
  "AZWIN BIN MAHMUD YAHYA",
  "SAIFUL MAHDI BIN ZULKIFLI",
  "SANUSI BIN ADNAN",
  "KHAIRUMAN BIN ALM RUSLAN",
  "SUHENDRI BIN ALM. MAHDAN HASYIM",
  "SAZALI BIN ISMAIL",
  "SAFENDI BIN YUSUF",
  "TEUKU WAHYUDI BIN (ALM) TEUKU KEUMALA",
  "NURIANTO BIN JUMALI",
  "DEDI MARSONI BIN JAFARUDDIN",
  "TARMIZI ALIAS ODON BIN HASAN",
  "AHMAD NAZAR BIN ANSARI",
  "ISLAMUDDIN BIN (ALM) BUSTAMI USMAN",
  "IRUL ALI BIN (ALM) INSYA",
  "MUHAMMAD AKBAR BIN BURHAN YUNUS",
  "HUSAINI ALIAS APANI ALIAS BANG NI BIN M. YUSUF",
  "MELDIANSYAH BIN ZAMZAMI",
  "SYUKRI BIN ASNAWI",
  "IRWAN BIN RAZALI",
  "M. NASIR ALIAS NGOH BIN (alm) ABDUL RASYID",
  "MUSLIADI BIN MUSTAFA YAHYA",
  "AMIRUDDIN BIN (ALM) ILYAS YUSUF",
  "SUPRIZAL SYAH ALS BLACK BIN (ALM) SUDIRMAN",
  "HELMI IRAWAN BIN ABDUL RAHMAN RAMLI",
  "AFRIZAL BAKRI, S.HI BIN BAKRI M. JALIL",
  "DODI ANSHARI, ST., MAPPI (CERT) BIN H. MAS'UD",
  "JAILANI BIN (ALM) JUNED",
  "RIZAL JUMALDI BIN M. DAHLAN",
  "AMIRUDDIN ALIAS AMIR BIN (ALM) HASAN",
  "MASYKUR ZA BIN ZAINAL ABIDIN",
  "ALVI RIZKINA BIN NAZARUDDIN",
  "FAJRI ALIAS FAT BIN (ALM) MUBIN",
  "BUDI HARTONO BIN MISRAN",
  "ZAINAL ABIDIN BIN ABDURRAHMAN",
  "WIN HENDRY SETIAWANDI BIN AHMADI GAYO",
  "MISMIADI BIN MUHAMMAD IDRIS",
  "RAHMAT HIDAYAT ALIAS WAHET BIN SYUKRI",
  "RIDWAN BIN USMAN",
  "ANDI HERWANDA BIN HARIYANTO",
  "T. FIRMANSYAH RF BIN T. BUDIMANSYAH",
  "ZAKANEDI, S.SOS ALIAS JAR BIN SANUDIN",
  "ARIF FIRTANA LUBIS BIN ALMARHUM FADAL LUBIS",
  "AFNAN BIN NAZARUDDIN",
  "MUHAMMAD SETIA BIN ALM. H. DAUD HASYIM",
  "RISKI JULIANSYAH BIN NASRUDDIN",
  "ARIS WANDA BIN MANYUNI",
  "MAWARDI MARZUKI BIN MARZUKI",
  "ILYIN BURHAN ALIAS GOYENG BIN BURHANUDDIN",
  "AHMAT YUSRI BIN MATSURI",
  "IMAM FADLY BIN SOLIHIN",
  "MUHAMMAD ZULFIKAR BIN HASAN OTMAN",
  "MAHESSA DARMA BIN MANSYUR",
  "RIZKI WAN FAJRY BIN HUSNI PRIADI",
  "ANGGA NATA SUANDA BIN (ALM) MUCHSIN",
  "JAMIL MARTHA BIN (ALM) SYARIFUDDIN",
  "SYAHRIL, S BIN SYAHDAN",
  "JIMMY SARWENDY BIN WAGIMAN",
  "RISKI FAYRANDA BIN (ALM) FAISAL",
  "SAYED ZULFIKAR BIN SAYED M. ALI",
  "NASRUDDIN M. DAUD BIN M. DAUD",
  "AMIRUDDIN BIN MUHAMMAD ARRAHMAN",
  "HAMDANI BIN ALM ALI NODAN",
  "MUHAMMAD RIZAL BIN AMBIA",
  "ROMI SYAHPUTRA BIN ALM RAZALI ABBAS",
  "MAIMUN SALEH BIN SALEH",
  "MUHAMMAD NUR BIN HUSEN",
  "SARYULIS BIN HASANUSI",
  "FAHRIZAL SYAHPUTRA BIN (Alm) SYAHRIAL",
  "SOFYAN BIN BIN ZAKARIA",
  "T. MEURAH DIDI ISKANDAR BIN T. MEURAH JAMIL",
  "JONNI YANDA BIN Alm M. YUNUS AMIN",
  "WAHYU RIZKI PERDANA BIN (Almarhum) AMIRUDDIN",
  "KAMARUDDIN alias JOL BIN IBRAHIM",
  "ISKANDAR BIN (Almarhum) IDRIS",
  "ROMI APRIANDIKA BIN SURIYONO",
  "REZA FAHLEVI BIN AGUSRI ARSYAD",
  "SAMSUARDI BIN ABDULLAH",
  "ROKI RAHMAD BIN MUZAKIR NURDIN",
  "ZAINAL ABIDIN BIN ALM.PUTEH",
  "SAMSUAR BIN RIDWAN",
  "SUWANDI A L BIN almarhum ABDUL LATIF",
  "SOFYAN HASAN Alias ABU BIN M. HASAN",
  "ZULFIKAR BIN M. YUSUF",
  "SUHENDRA BIN JUNAIDI",
  "ZULKARNAINI BIN HASBI",
  "FERY FADLI BIN (ALM) RAMLI",
  "ULFAN BIN EFI SAPUTRA",
  "EDI SAPUTRA BIN ISMAIL AHMAD",
  "SYAMSUDDIN BIN Almarhum SARONG",
  "ODIANTRI BIN Almarhum NYAK DAUD HAS",
  "RUDI RINANDA BIN M. NASIR",
  "YUSRIZAL BIN ABKAR",
  "JEFRI SANJAYA BIN KAMARUDDIN",
  "SULAIMAN ID BIN IDRIS",
  "AULIA BIN ISKANDAR",
  "MARAHALIM, S.P. BIN H. JAMSYAH",
  "ANANTA TOUW BIN UMAR TOUW",
  "JOHAN PAHME NASUTION BIN H.A MUNIP NASUTION",
  "RAISUL MULIADY BIN SAFWAN (Alm)",
  "HENDRA BIN ALM. AMRI",
  "RAMAZI ALIAS GAM RUSA ALIAS BIT BIN Almarhum IDRIS",
  "MUKHLIS BIN BUNTOK BIDIN",
  "SYAMSUDDIN ALIAS BOB BIN M.SUID",
  "MUHAMMAD RIZKY BIN ABDUL RASYID",
  "ABDUL HADI BIN MAHMUD",
  "DANIL ADRIAL, S.P",
  "ARIF AFAJAR BIN MISNO",
  "SYAFARUDDIN BIN IBRAHIM",
  "TEUKU JOHANS BIN TEUKU LOTHAN (ALM)",
  "HERIJAL JAILANI BIN JAILANI",
  "ANWAR RUSTAM BIN (ALM) RUSTAM",
  "M. IQBAL BIN (ALM) SYARBAINI",
  "MUHAMMAD MUARI WIBOWO BIN (ALM) SUARNUDDIN",
  "RAI WIRANATA BIN SURYA DARMA",
  "MUSSALINI BIN Alm. YUSUF BANTA",
  "AMARULLAH BIN BURHAN ANDI",
  "GUNAWAN SYAH PUTRA BIN SAIAN",
  "MAULIADI BIN (ALM) ZAINAL ABIDIN",
  "M. AIYUB BIN (almarhum) TAMRIN",
  "HASAN BASRI BIN SANDANG",
  "ALFIAN DAIRY BIN SULAIMAN",
  "M. YUSUF BIN DAUD ALIAS ABU KURMA",
  "M. ISA BIN ISMAIL",
  "ABDULLAH BIN A. JALIL",
  "Ir. SAID MAHJALI, M.M.",
  "SYAKBAN BIN M YAHYA",
  "IRWINSYAH BIN SYAWAL",
  "AHMAD RIEFQI BIN (ALM) SULAIMAN",
  "GITA RAHMAD BIN NASRULLAH",
  "WIRA GUNAWAN BIN AHMAD ZUBAIDI",
  "KHAIRUL AMBIA, S.Pd.i BIN (ALM) RUSLI",
  "MUHAMMAD YAMIN BIN RADEN BAMBANG",
  "SATRIA AGUSANDY BIN (ALM) YUSRIZAL",
  "ABDUL HAMID BIN M.ADAM",
  "TEGUH MANDIRI PUTRA BIN HASBI",
  "SOFYAN BIN M. AMIN",
  "KHAIRUL RAZAK BIN (ALM)M. JAMIL",
  "R.I AGUNAWAN SOLIN",
  "KHAIRUL AZMI Alias BULEK BIN HASYIM",
  "IBNU HAJARUDDIN, S.Kom., BIN ISMAIL IDRIS",
  "MUKHLIZAR BIN AMRAN",
  "T. RAMLI ANGKASA, SE.Ak., M.Si BIN TM HASYIM",
  "ASKA ASKIAN BIN NASRUL",
  "RIAN SYAHRONI BIN SYADIMAN",
  "M. NASIR BIN HASBI",
  "EDWAR SANUSI BIN HASBI",
  "MUHAMMAD RIZAL BIN ABDUL GANI",
  "RIFKI BIN RUSLI YAHYA",
  "ZULMANSYAH BIN ALM SYAMSUDIN",
  "IRFANSYAH BIN BAMBANG RAHMAN",
  "FETJARIAL BIN JARIMIN",
  "MUNZIR BIN M.JUNED",
  "SAMSUARDI BIN ALM M DAUD",
  "MUKTAR HASAN BIN HASAN",
  "SUBHAN BIN NURDIN",
  "MUHAMMAD SYAHNAN BIN ALM NUR SANIP",
  "ZULKHAISI BIN IBNU HASYIM",
  "MUHAMMAD ROYANI BIN RUSLAN",
  "YADI ATMAN BIN JAMALUDDIN",
  "KARUNIA RAHMAT BIN SUDARMADI",
  "AIDI AKHYAR BIN NAZARUDDIN",
  "ZULFAHMI ALIAS BOM BOM BIN SYUKRI",
  "FIRDAUS BIN SAFRI",
  "ILHAM MAULANA BIN RAZALI M. SALEH",
  "IRHAMNI BIN ALM. ABDULLAH RAHMAN",
  "HAMDANI BIN SAFARUDDIN",
  "HAMZAH, S.E. BIN NURDIN",
  "ARIEF MAULANA BIN ANWAR SANUSI",
  "TAUFIK ICHSAN BIN M. YUSUF",
  "IRFAN RIZKI NUGRAHA, S.M BIN ISNAIDI DAHLAN, S.T",
  "RIDWAN BIN ALM. T. CUT AHMAD",
  "NAZARUDDIN BIN AMIRUDDIN",
  "IKBAL BIN ABDULLAH",
  "FAJAR RAMADHAN BIN MARZUKI",
  "HANAF MAHDI BIN (ALM.) HANAFIAH",
  "MURIZAL BIN SAMSUDDIN",
  "FARIANDI BIN M. YUNSYAH",
  "SAFRIYANTO BIN SUPARNO",
  "SEVEN MEI SINAGA",
  "HAIRUL MUNADI, S.E., M.M., BIN (ALMARHUM) MANSUR",
  "MARWAN BIN HUSEN",
  "MAHDI, S.PD.,M.PD. BIN (ALMARHUM) ABDUL HAMID",
  "MUHAMMAD,S.P BIN ABDULLAH",
  "ISARIANDI BIN MUSTAFA",
  "ACHMAD YANI IKBAL BIN ALM. SOFYAN ADAM",
  "RONI ANDRIANSYAH ALIAS RONI BIN (ALM) ABDURRAHMAN",
  "AFIFUDDIN BIN M. ALI MUSA",
  "LUKMANUL HAKIM BIN Alm. RAMLAN"
]

let wbpInput = null;
let suggestBox = null;
let btnDaftar = null;
let toast = null;

const formIds = ["nik", "nama", "gender", "relasi", "wbp"];

let initialAppHTML = "";
let carouselTimer = null;

/* =========================
   BIND ELEMENTS
========================= */
function bindAppElements() {
  wbpInput = document.getElementById("wbp");
  suggestBox = document.getElementById("wbp-suggest");
  btnDaftar = document.getElementById("btn-daftar");
  toast = document.getElementById("toast");
}

function initFormBindings() {
  bindAppElements();

  formIds.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.addEventListener("input", cekForm);
    el.addEventListener("change", cekForm);
  });

  if (wbpInput) {
    wbpInput.addEventListener("input", (e) => {
      renderSuggestions(e.target.value);
      cekForm();
    });
  }

  if (suggestBox) {
    suggestBox.addEventListener("click", (e) => {
      const item = e.target.closest(".wbp-item");
      if (!item) return;

      wbpInput.value = item.dataset.name;
      suggestBox.classList.add("hidden");
      cekForm();
    });
  }
}

/* =========================
   GLOBAL CLICK
========================= */
document.addEventListener("click", (e) => {
  if (!e.target.closest(".autocomplete-wrap")) {
    suggestBox?.classList.add("hidden");
  }
});

/* =========================
   TOAST
========================= */
function showToast(message, type = "error") {
  if (!toast) return;

  toast.textContent = message;
  toast.className = `toast show ${type}`;

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toast.className = "toast";
  }, 2200);
}

/* =========================
   BASIC HELPERS
========================= */
function getValue(id) {
  return document.getElementById(id)?.value.trim() || "";
}

function getBookingList() {
  return JSON.parse(localStorage.getItem("booking")) || [];
}

function getTodayBookingCount() {
  const now = new Date();

  const todayKey =
    now.getFullYear().toString() +
    String(now.getMonth() + 1).padStart(2, "0") +
    String(now.getDate()).padStart(2, "0");

  return getBookingList().filter((item) => {
    if (!item.id || typeof item.id !== "string") return false;

    const match = item.id.match(/^RTN-(\d{8})/);
    if (!match) return false;

    return match[1] === todayKey;
  }).length;
}

/* =========================
   DASHBOARD
========================= */
function updateDashboard() {
  const stat = document.getElementById("stat-booking");
  const lastVisit = document.getElementById("last-visit");

  if (stat) {
    stat.textContent = getTodayBookingCount();
  }

  if (!lastVisit) return;

  const list = getBookingList();

  if (!list.length) {
    lastVisit.innerHTML = `<div class="history-empty">Belum ada riwayat kunjungan</div>`;
    return;
  }

  const last = list[list.length - 1];

  lastVisit.innerHTML = `
    <div class="history-item">
      <div class="history-main">
        <strong>${last.nama}</strong>
        <span>${last.wbp}</span>
      </div>
      <div class="history-badge">${last.status}</div>
    </div>
  `;
}

/* =========================
   FORM VALIDATION
========================= */
function cekForm() {
  const valid =
    /^\d{16}$/.test(getValue("nik")) &&
    getValue("nama") &&
    getValue("gender") &&
    getValue("relasi") &&
    getValue("wbp");

  if (btnDaftar) btnDaftar.disabled = !valid;
}

/* =========================
   FAST AUTOCOMPLETE
========================= */
function renderSuggestions(keyword) {
  if (!suggestBox || !wbpInput) return;

  const q = keyword.trim().toLowerCase();

  if (!q) {
    suggestBox.classList.add("hidden");
    suggestBox.innerHTML = "";
    return;
  }

  const results = daftarWBP
    .filter((nama) => nama.toLowerCase().includes(q))
    .slice(0, 8);

  if (!results.length) {
    suggestBox.classList.add("hidden");
    suggestBox.innerHTML = "";
    return;
  }

  suggestBox.innerHTML = results
    .map(
      (nama) =>
        `<div class="wbp-item" data-name="${nama.replace(/"/g, "&quot;")}">${nama}</div>`
    )
    .join("");

  suggestBox.classList.remove("hidden");
}

/* =========================
   NAVIGATION
========================= */
function bukaForm() {
  document.getElementById("dashboard-page")?.classList.add("hidden");
  document.getElementById("form-page")?.classList.remove("hidden");
}

function kembaliDashboard() {
  document.getElementById("form-page")?.classList.add("hidden");
  document.getElementById("dashboard-page")?.classList.remove("hidden");
  updateDashboard();
}

/* =========================
   QR DOWNLOAD
========================= */
function downloadQR() {
  const ticket = document.getElementById("ticket-capture");
  if (!ticket || typeof html2canvas === "undefined") return;

  const actions = ticket.querySelector(".ticket-actions");

  if (actions) {
    actions.style.display = "none";
  }

  html2canvas(ticket, {
    scale: 4,
    useCORS: true,
    backgroundColor: "#ffffff"
  }).then((canvas) => {
    if (actions) {
      actions.style.display = "";
    }

    const link = document.createElement("a");
    link.download = "ticket-zero-visit.png";
    link.href = canvas.toDataURL("image/png", 1.0);
    link.click();
  }).catch(() => {
    if (actions) {
      actions.style.display = "";
    }
  });
}

/* =========================
   BACK TO HOME
========================= */
function kembaliBeranda() {
  const app = document.getElementById("app");
  if (!app || !initialAppHTML) return;

  app.innerHTML = initialAppHTML;

  initFormBindings();
  updateDashboard();
  initCarousel();
  cekForm();
}

/* =========================
   TICKET
========================= */
function buatTicket(data) {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <main class="app">
      <div class="phone">
        <section class="ticket-page">
          <div class="ticket" id="ticket-capture">

            <div class="ticket-watermark">ZERO</div>

            <div class="ticket-top">
              <div class="ticket-brand">Zero Visit</div>
              <div class="ticket-sub">Tiket Kunjungan Online</div>
            </div>

            <div class="ticket-status">BOOKED</div>
            <div class="ticket-number">${data.id}</div>

            <div class="ticket-glass">
              <div class="ticket-glass-label">Nama Pengunjung</div>
              <div class="ticket-glass-value">${data.nama}</div>
            </div>

            <div class="ticket-detail">

              <div class="ticket-row">
                <span>NIK</span>
                <strong>${data.nik}</strong>
              </div>

              <div class="ticket-row">
                <span>Jenis Kelamin</span>
                <strong>${data.gender}</strong>
              </div>

              <div class="ticket-row">
                <span>Relasi</span>
                <strong>${data.relasi}</strong>
              </div>

              <div class="ticket-row">
                <span>Nama WBP</span>
                <strong>${data.wbp}</strong>
              </div>

            </div>

            <div class="ticket-divider"></div>

            <div class="ticket-qr">
              <canvas id="ticket-qr"></canvas>
            </div>

            <div class="ticket-note">
              Tunjukkan QR ini saat verifikasi kunjungan
            </div>

            <div class="ticket-footer">
              Dokumen digital resmi • Zero Visit
            </div>

            <div class="ticket-actions">
              <button class="btn-secondary" type="button" onclick="downloadQR()">
                Download QR
              </button>

              <button class="btn" type="button" onclick="kembaliBeranda()">
                Kembali ke Beranda
              </button>
            </div>

          </div>
        </section>
      </div>
    </main>
  `;

  if (typeof QRCode !== "undefined") {
    QRCode.toCanvas(
      document.getElementById("ticket-qr"),
      JSON.stringify(data),
      {
        width: 185,
        margin: 2
      }
    );
  }
}

/* =========================
   BOOKING
========================= */
function booking() {
  const data = {
    id: (() => {
      const now = new Date();

      const yyyy = now.getFullYear();
      const mm = String(now.getMonth() + 1).padStart(2, "0");
      const dd = String(now.getDate()).padStart(2, "0");
      const hh = String(now.getHours()).padStart(2, "0");
      const mi = String(now.getMinutes()).padStart(2, "0");

      return `RTN-${yyyy}${mm}${dd}${hh}${mi}`;
    })(),
    nik: getValue("nik"),
    nama: getValue("nama"),
    gender: getValue("gender"),
    relasi: getValue("relasi"),
    wbp: getValue("wbp"),
    status: "BOOKED"
  };

  const list = getBookingList();
  list.push(data);

  localStorage.setItem("booking", JSON.stringify(list));
  localStorage.setItem("ticket", JSON.stringify(data));

  showToast("Pendaftaran berhasil", "success");

  setTimeout(() => {
    buatTicket(data);
  }, 450);
}

function lihatTiket() {
  const ticket = JSON.parse(localStorage.getItem("ticket"));

  if (!ticket) {
    showToast("Belum ada tiket");
    return;
  }

  buatTicket(ticket);
}

/* =========================
   CAROUSEL
========================= */
function initCarousel() {
  const track = document.getElementById("carousel-track");
  const dots = document.querySelectorAll("#carousel-dots span");

  if (!track || !dots.length) return;

  if (carouselTimer) {
    clearInterval(carouselTimer);
  }

  let index = 0;

  carouselTimer = setInterval(() => {
    index = (index + 1) % dots.length;
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((d) => d.classList.remove("active"));
    dots[index].classList.add("active");
  }, 3200);
}

/* =========================
   LOADING
========================= */
window.addEventListener("load", () => {
  const loading = document.getElementById("loading-screen");
  const app = document.getElementById("app");

  initialAppHTML = document.getElementById("app")?.innerHTML || "";

  initFormBindings();

  setTimeout(() => {
    if (loading) {
      loading.style.opacity = "0";

      setTimeout(() => {
        loading.remove();
        app?.classList.remove("hidden");
      }, 350);
    } else {
      app?.classList.remove("hidden");
    }
  }, 1500);

  updateDashboard();
  initCarousel();
  cekForm();
});

/* =========================
   GLOBAL
========================= */
window.bukaForm = bukaForm;
window.kembaliDashboard = kembaliDashboard;
window.booking = booking;
window.lihatTiket = lihatTiket;
window.downloadQR = downloadQR;
window.kembaliBeranda = kembaliBeranda;

