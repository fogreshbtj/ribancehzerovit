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

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzB3LYw7lDfHe4zhppYMX3rWxk9wNoD43elL9ftiwSuaKJ5zAQPcK7dKYSe5RPTBQysaA/exec";

let wbpInput = null;
let suggestBox = null;
let btnDaftar = null;
let toast = null;
let isSubmitting = false;

const formIds = [
  "nik",
  "alamat",
  "nama",
  "gender",
  "relasi",
  "wbp",
  "pengikut-laki",
  "pengikut-perempuan",
  "pengikut-anak"
];

let initialAppHTML = "";

/* =========================
   ELEMENT BINDING
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

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".autocomplete-wrap")) {
      suggestBox?.classList.add("hidden");
    }
  });
}

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
  }, 3000);
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

async function getGithubBookingFile() {
  const url = `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${GITHUB_CONFIG.path}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `token ${GITHUB_CONFIG.token}`,
      Accept: "application/vnd.github+json"
    }
  });

  if (!res.ok) {
    throw new Error("Gagal membaca file GitHub");
  }

  const file = await res.json();

  let content = [];

  try {
    content = JSON.parse(atob(file.content.replace(/\n/g, "")));
  } catch {
    content = [];
  }

  return {
    sha: file.sha,
    content
  };
}

async function saveBookingToGithub(data) {
  const url = `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${GITHUB_CONFIG.path}`;

  const file = await getGithubBookingFile();

  file.content.push(data);

  const encoded = btoa(
    unescape(
      encodeURIComponent(JSON.stringify(file.content, null, 2))
    )
  );

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `token ${GITHUB_CONFIG.token}`,
      Accept: "application/vnd.github+json"
    },
    body: JSON.stringify({
      message: `booking ${data.id}`,
      content: encoded,
      sha: file.sha,
      branch: GITHUB_CONFIG.branch
    })
  });

  if (!res.ok) {
    throw new Error("Gagal menyimpan booking ke GitHub");
  }
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
lastVisit.innerHTML = "";
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
   AUTOCOMPLETE
========================= */
function renderSuggestions(keyword) {
  if (!suggestBox || !wbpInput || typeof daftarWBP === "undefined") return;

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
   QR DOWNLOAD
========================= */
function downloadQR() {
  const ticket = JSON.parse(localStorage.getItem("ticket"));
  if (!ticket || typeof QRCode === "undefined") return;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const width = 1080;
  const height = 1560;

  canvas.width = width;
  canvas.height = height;

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "#0b5cab";
  ctx.fillRect(0, 0, width, 210);

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 52px Arial";
  ctx.fillText("Zero Visit", 60, 85);

  ctx.font = "28px Arial";
  ctx.fillText("Tiket Kunjungan Online", 60, 135);

  drawRoundedRect(ctx, 60, 245, 170, 52, 26, "#eef7ff");

  ctx.fillStyle = "#0b5cab";
  ctx.font = "bold 24px Arial";
  ctx.fillText("BOOKED", 98, 278);

  ctx.fillStyle = "#14213d";
  ctx.font = "bold 30px Arial";
  ctx.fillText(ticket.id || "-", 60, 360);

  ctx.save();
  ctx.translate(width / 2, 720);
  ctx.rotate(-0.2);
  ctx.fillStyle = "rgba(11,92,171,0.045)";
  ctx.font = "bold 150px Arial";
  ctx.textAlign = "center";
  ctx.fillText("ZERO VISIT", 0, 0);
  ctx.restore();
  ctx.textAlign = "left";

  let y = 445;

  drawDownloadRow(ctx, "NIK", ticket.nik, y, width); y += 95;
  drawDownloadRow(ctx, "Nama", ticket.nama, y, width); y += 95;
  drawDownloadRow(ctx, "Jenis Kelamin", ticket.gender, y, width); y += 95;
  drawDownloadRow(ctx, "Relasi", ticket.relasi, y, width); y += 95;
  drawDownloadRow(ctx, "Nama WBP", ticket.wbp, y, width); y += 110;

  const now = new Date();

  const printedAt =
    String(now.getDate()).padStart(2, "0") + "/" +
    String(now.getMonth() + 1).padStart(2, "0") + "/" +
    now.getFullYear() + " " +
    String(now.getHours()).padStart(2, "0") + ":" +
    String(now.getMinutes()).padStart(2, "0");

  const validUntil =
    String(now.getDate()).padStart(2, "0") + "/" +
    String(now.getMonth() + 1).padStart(2, "0") + "/" +
    now.getFullYear() + " 23:59";

  ctx.fillStyle = "#64748b";
  ctx.font = "21px Arial";
  ctx.fillText("Dicetak", 60, y);
  ctx.fillText("Valid Until", 540, y);

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 21px Arial";
  ctx.fillText(printedAt, 150, y);
  ctx.fillText(validUntil, 665, y);

  y += 70;

  ctx.fillStyle = "#64748b";
  ctx.font = "24px Arial";
  ctx.fillText("Pengikut", 60, y);

  const boxY = y - 34;
  const boxW = 215;
  const gap = 22;
  const startX = 375;

  drawFollowBox(ctx, startX, boxY, boxW, "Laki-laki", ticket.pengikutLaki || 0);
  drawFollowBox(ctx, startX + boxW + gap, boxY, boxW, "Perempuan", ticket.pengikutPerempuan || 0);
  drawFollowBox(ctx, startX + (boxW + gap) * 2, boxY, boxW, "Anak-anak", ticket.pengikutAnak || 0);

  QRCode.toCanvas(
    JSON.stringify(ticket),
    {
      width: 350,
      margin: 1
    },
    function (err, qrCanvas) {
      if (err) return;

      ctx.drawImage(qrCanvas, (width - 350) / 2, 1100);

      ctx.fillStyle = "#64748b";
      ctx.font = "22px Arial";
      ctx.textAlign = "center";
      ctx.fillText(
        "Tunjukkan QR ini saat verifikasi kunjungan",
        width / 2,
        1490
      );

      ctx.font = "18px Arial";
      ctx.fillStyle = "#94a3b8";
      ctx.fillText(
        "Dokumen digital resmi • Zero Visit",
        width / 2,
        1525
      );

      ctx.textAlign = "left";

      const link = document.createElement("a");
      link.download = `${ticket.id || "ticket"}.png`;
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();
    }
  );
}

/* =========================
   DOWNLOAD HELPERS
========================= */
function drawRoundedRect(ctx, x, y, width, height, radius, fill) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();

  ctx.fillStyle = fill;
  ctx.fill();
}

function drawDownloadRow(ctx, label, value, y, width) {
  ctx.fillStyle = "#64748b";
  ctx.font = "24px Arial";
  ctx.fillText(label, 60, y);

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 24px Arial";
  ctx.textAlign = "right";
  ctx.fillText(String(value || "-"), width - 60, y);
  ctx.textAlign = "left";

  ctx.strokeStyle = "#eef2f7";
  ctx.beginPath();
  ctx.moveTo(60, y + 28);
  ctx.lineTo(width - 60, y + 28);
  ctx.stroke();
}

function drawFollowBox(ctx, x, y, w, label, value) {
  drawRoundedRect(ctx, x, y, w, 86, 16, "#f8fafc");

  ctx.fillStyle = "#64748b";
  ctx.font = "17px Arial";
  ctx.textAlign = "center";
  ctx.fillText(label, x + w / 2, y + 28);

  ctx.fillStyle = "#0f172a";
  ctx.font = "bold 24px Arial";
  ctx.fillText(String(value), x + w / 2, y + 60);

  ctx.textAlign = "left";
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

              <div class="ticket-row">
                <span>Pengikut</span>
                <strong>
                  <div class="ticket-followers">
                    <div class="ticket-follow-item">
                      <small>Laki-laki</small>
                      <b>${data.pengikutLaki || 0}</b>
                    </div>
                    <div class="ticket-follow-item">
                      <small>Perempuan</small>
                      <b>${data.pengikutPerempuan || 0}</b>
                    </div>
                    <div class="ticket-follow-item">
                      <small>Anak-anak</small>
                      <b>${data.pengikutAnak || 0}</b>
                    </div>
                  </div>
                </strong>
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
              <button class="btn-secondary" onclick="downloadQR()">
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
async function booking() {
  if (isSubmitting) return;

  isSubmitting = true;

  if (btnDaftar) {
    btnDaftar.disabled = true;
    btnDaftar.textContent = "Mengirim...";
  }

  const data = {
    id: (() => {
      const now = new Date();

      const yyyy = now.getFullYear();
      const mm = String(now.getMonth() + 1).padStart(2, "0");
      const dd = String(now.getDate()).padStart(2, "0");
      const hh = String(now.getHours()).padStart(2, "0");
      const mi = String(now.getMinutes()).padStart(2, "0");
      const ss = String(now.getSeconds()).padStart(2, "0");

      return `RTN-${yyyy}${mm}${dd}${hh}${mi}${ss}`;
    })(),

    nik: getValue("nik"),
    alamat: getValue("alamat"),
    nama: getValue("nama"),
    gender: getValue("gender"),
    relasi: getValue("relasi"),
    wbp: getValue("wbp"),

    pengikutLaki: Number(getValue("pengikut-laki") || 0),
    pengikutPerempuan: Number(getValue("pengikut-perempuan") || 0),
    pengikutAnak: Number(getValue("pengikut-anak") || 0),

    created_at: (() => {
      const now = new Date();

      const yyyy = now.getFullYear();
      const mm = String(now.getMonth() + 1).padStart(2, "0");
      const dd = String(now.getDate()).padStart(2, "0");
      const hh = String(now.getHours()).padStart(2, "0");
      const mi = String(now.getMinutes()).padStart(2, "0");

      return `${yyyy}-${mm}-${dd} ${hh}:${mi}`;
    })(),

    status: "BOOKED"
  };

  try {
    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(data)
    });

    const text = await res.text();
    const result = JSON.parse(text);

    if (!result.success) {
      throw new Error(result.message || "Gagal kirim");
    }

    const list = getBookingList();
    list.push(data);

    localStorage.setItem("booking", JSON.stringify(list));
    localStorage.setItem("ticket", JSON.stringify(data));

    showToast("Pendaftaran berhasil", "success");

    setTimeout(() => {
      buatTicket(data);
    }, 350);

  } catch (err) {
    console.error(err);
    showToast("Gagal kirim data");

    isSubmitting = false;

    if (btnDaftar) {
      btnDaftar.textContent = "Daftarkan";
      cekForm();
    }
  }
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

  let index = 0;

  setInterval(() => {
    index = (index + 1) % dots.length;
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((d) => d.classList.remove("active"));
    dots[index].classList.add("active");
  }, 3200);
}

    function updateScheduleStatus() {
  const badge = document.getElementById("schedule-status");
  if (!badge) return;

  const now = new Date();

  const wib = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
  );

  const day = wib.getDay();   // 0 = Minggu
  const hour = wib.getHours();
  const minute = wib.getMinutes();

  const current = hour * 60 + minute;
  const open = 9 * 60;
  const close = 12 * 60;

  const isOpen = day >= 1 && day <= 6 && current >= open && current < close;

  if (isOpen) {
    badge.textContent = "Sedang Buka";
    badge.classList.remove("closed");
  } else {
    badge.textContent = "Sedang Tutup";
    badge.classList.add("closed");
  }
}

/* =========================
   LOADING
========================= */
window.addEventListener("load", () => {
  updateScheduleStatus();
  startQueueCountdown();
  
  const loading = document.getElementById("loading-screen");
  const app = document.getElementById("app");

  initialAppHTML = document.getElementById("app")?.innerHTML || "";

  initFormBindings();
  updateDashboard();
  initCarousel();
  cekForm();

  setTimeout(() => {
    if (!app) return;

    app.classList.remove("hidden");

    requestAnimationFrame(() => {
      app.classList.add("show");
    });

    if (loading) {
      loading.classList.add("hide");

      setTimeout(() => {
        loading.remove();
      }, 420);
    }
  }, 3300);
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

