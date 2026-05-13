const daftarWBP = [
  {
    "nama": "IBNU HAJARUDDIN, S.Kom., BIN ISMAIL IDRIS",
    "perkara": "Korupsi",
    "kamar": "A / 32"
  },
  {
    "nama": "BUDI SANTOSO BIN MAHIDIN NAFI",
    "perkara": "Korupsi",
    "kamar": "A / 28"
  },
  {
    "nama": "SYUKRI BIN MURDANI",
    "perkara": "Korupsi",
    "kamar": "A / 28"
  },
  {
    "nama": "Tgk. SAHIDUL AKRAM AL HAFIZD BIN ALM. H. Tgk. SYABIRINSYAH",
    "perkara": "Kesusilaan",
    "kamar": "B / 44"
  },
  {
    "nama": "KHAIRUL AZMI Alias BULEK BIN HASYIM",
    "perkara": "Penadahan",
    "kamar": "B / 64"
  },
  {
    "nama": "NAZAR MAULANA BIN JUNAIDI",
    "perkara": "Peraturan Daerah",
    "kamar": "B / 60"
  },
  {
    "nama": "M. FAUZI ALS FAUZI BINTANG BIN ALM. JAFAR MUSA",
    "perkara": "Korupsi",
    "kamar": "A / 30"
  },
  {
    "nama": "ALIMSYAH BIN ALM. SYARIPUDDIN",
    "perkara": "Korupsi",
    "kamar": "A / 31"
  },
  {
    "nama": "SYUKURUDDIN, S.E., M.AP BIN ALM. H. LAKMANA",
    "perkara": "Korupsi",
    "kamar": "A / 30"
  },
  {
    "nama": "HERYAN PALAWAN BIN ALM. MAHDI",
    "perkara": "Korupsi",
    "kamar": "A / 31"
  },
  {
    "nama": "MUHAR ABDUH WAHAB, S.E BIN ALM. SYARIFUDDIN ABD WAHAB",
    "perkara": "Korupsi",
    "kamar": "A / 29"
  },
  {
    "nama": "DK. KHALIDIN AMRI BIN ALM. ABD KADIR WAHID",
    "perkara": "Korupsi",
    "kamar": "A / 31"
  },
  {
    "nama": "SYAIFULLAH BIN ALM. ALI USMAN",
    "perkara": "Korupsi",
    "kamar": "A / 32"
  },
  {
    "nama": "KHAIRUL RAZAK BIN (ALM)M. JAMIL",
    "perkara": "Narkotika",
    "kamar": "B / 50"
  },
  {
    "nama": "R.I AGUNAWAN SOLIN",
    "perkara": "Korupsi",
    "kamar": "B / 62"
  },
  {
    "nama": "PUTRA IRWANSYAH BIN RIDWAN YUSUF",
    "perkara": "Pertambangan Mineral dan Batubara",
    "kamar": "A / 14"
  },
  {
    "nama": "SYAHRIAL BIN ALM. USMAN Z.",
    "perkara": "Korupsi",
    "kamar": "A / 13"
  },
  {
    "nama": "SOFYAN BIN M. AMIN",
    "perkara": "Korupsi",
    "kamar": "B / 65"
  },
  {
    "nama": "IR. MAHDI AMIN BIN M. AMIN",
    "perkara": "Korupsi",
    "kamar": "A / 31"
  },
  {
    "nama": "DARWIN BIN ABDULLAH BEUNA",
    "perkara": "Korupsi",
    "kamar": "MAPENALING / 11"
  },
  {
    "nama": "ABDUL HAMID BIN M.ADAM",
    "perkara": "Narkotika",
    "kamar": "B / 61"
  },
  {
    "nama": "TEGUH MANDIRI PUTRA BIN HASBI",
    "perkara": "Korupsi",
    "kamar": "B / 47"
  },
  {
    "nama": "MUHAMMAD YAMIN BIN RADEN BAMBANG",
    "perkara": "Penggelapan",
    "kamar": "A / 33"
  },
  {
    "nama": "IRFADI BIN SUFYAN",
    "perkara": "Korupsi",
    "kamar": "A / 19"
  },
  {
    "nama": "HENDI HARDI HUTABARAT, S.PD., M.PD. BIN M. RUDI HUTABARAT",
    "perkara": "Korupsi",
    "kamar": "A / 24"
  },
  {
    "nama": "KHAIRUL AMBIA, S.Pd.i BIN (ALM) RUSLI",
    "perkara": "Penggelapan",
    "kamar": "C / 69"
  },
  {
    "nama": "ABDULLAH M BIN MAHMUD",
    "perkara": "Peraturan Daerah",
    "kamar": "A / 15"
  },
  {
    "nama": "LUKMANUL HAKIM BIN Alm. RAMLAN",
    "perkara": "Korupsi",
    "kamar": "C / 68"
  },
  {
    "nama": "SATRIA AGUSANDY BIN (ALM) YUSRIZAL",
    "perkara": "Narkotika",
    "kamar": "B / 43"
  },
  {
    "nama": "RICO DARMAWAN BIN ALM RISWAN",
    "perkara": "Narkotika",
    "kamar": "B / 57"
  },
  {
    "nama": "WIRA GUNAWAN BIN AHMAD ZUBAIDI",
    "perkara": "Narkotika",
    "kamar": "B / 57"
  },
  {
    "nama": "GITA RAHMAD BIN NASRULLAH",
    "perkara": "Penipuan",
    "kamar": "B / 51"
  },
  {
    "nama": "IRWINSYAH BIN SYAWAL",
    "perkara": "Kekerasan dalam Rumah Tangga",
    "kamar": "B / 44"
  },
  {
    "nama": "SYAKBAN BIN M YAHYA",
    "perkara": "Narkotika",
    "kamar": "B / 48"
  },
  {
    "nama": "AHMAD RIEFQI BIN (ALM) SULAIMAN",
    "perkara": "Narkotika",
    "kamar": "B / 55"
  },
  {
    "nama": "Ir. SAID MAHJALI, M.M.",
    "perkara": "Korupsi",
    "kamar": "C / 67"
  },
  {
    "nama": "Drs. ZAMZAMI BIN BEN HASAN",
    "perkara": "Korupsi",
    "kamar": "B / 64"
  },
  {
    "nama": "M. ISA BIN ISMAIL",
    "perkara": "Narkotika",
    "kamar": "B / 63"
  },
  {
    "nama": "ABDULLAH BIN A. JALIL",
    "perkara": "Narkotika",
    "kamar": "MAPENALING / 3"
  },
  {
    "nama": "M. YUSUF BIN DAUD ALIAS ABU KURMA",
    "perkara": "Narkotika",
    "kamar": "B / 54"
  },
  {
    "nama": "ALFIAN DAIRY BIN SULAIMAN",
    "perkara": "Narkotika",
    "kamar": "B / 65"
  },
  {
    "nama": "HASAN BASRI BIN SANDANG",
    "perkara": "Narkotika",
    "kamar": "B / 56"
  },
  {
    "nama": "FAHRUZAL BIN MAULANA",
    "perkara": "Narkotika",
    "kamar": "B / 53"
  },
  {
    "nama": "M. AIYUB BIN (almarhum) TAMRIN",
    "perkara": "Narkotika",
    "kamar": "B / 63"
  },
  {
    "nama": "MAULIADI BIN (ALM) ZAINAL ABIDIN",
    "perkara": "Narkotika",
    "kamar": "B / 58"
  },
  {
    "nama": "GUNAWAN SYAH PUTRA BIN SAIAN",
    "perkara": "Kesusilaan",
    "kamar": "B / 59"
  },
  {
    "nama": "AMARULLAH BIN BURHAN ANDI",
    "perkara": "Narkotika",
    "kamar": "B / 53"
  },
  {
    "nama": "MUSSALINI BIN Alm. YUSUF BANTA",
    "perkara": "Narkotika",
    "kamar": "B / 54"
  },
  {
    "nama": "MUHAMMAD MUARI WIBOWO BIN (ALM) SUARNUDDIN",
    "perkara": "Pencurian",
    "kamar": "B / 48"
  },
  {
    "nama": "M. IQBAL BIN (ALM) SYARBAINI",
    "perkara": "Narkotika",
    "kamar": "B / 58"
  },
  {
    "nama": "RAI WIRANATA BIN SURYA DARMA",
    "perkara": "Pencurian",
    "kamar": "B / 57"
  },
  {
    "nama": "NIZAM RABBANI BIN JAMALUDDIN IDRIS",
    "perkara": "Narkotika",
    "kamar": "B / 64"
  },
  {
    "nama": "ANWAR RUSTAM BIN (ALM) RUSTAM",
    "perkara": "Narkotika",
    "kamar": "B / 54"
  },
  {
    "nama": "HERIJAL JAILANI BIN JAILANI",
    "perkara": "Narkotika",
    "kamar": "B / 55"
  },
  {
    "nama": "TEUKU JOHANS BIN TEUKU LOTHAN (ALM)",
    "perkara": "Korupsi",
    "kamar": "A / 31"
  },
  {
    "nama": "SYAFARUDDIN BIN IBRAHIM",
    "perkara": "Narkotika",
    "kamar": "B / 63"
  },
  {
    "nama": "ABDUL HADI BIN MAHMUD",
    "perkara": "Narkotika",
    "kamar": "B / 64"
  },
  {
    "nama": "DANIL ADRIAL, S.P",
    "perkara": "Korupsi",
    "kamar": "A / 37"
  },
  {
    "nama": "ARIF AFAJAR BIN MISNO",
    "perkara": "Narkotika",
    "kamar": "B / 58"
  },
  {
    "nama": "MUHAMMAD RIZKY BIN ABDUL RASYID",
    "perkara": "Penipuan",
    "kamar": "B / 65"
  },
  {
    "nama": "SYAMSUDDIN ALIAS BOB BIN M.SUID",
    "perkara": "Narkotika",
    "kamar": "B / 64"
  },
  {
    "nama": "MUKHLIS BIN BUNTOK BIDIN",
    "perkara": "Narkotika",
    "kamar": "B / 63"
  },
  {
    "nama": "RAMAZI ALIAS GAM RUSA ALIAS BIT BIN Almarhum IDRIS",
    "perkara": "Narkotika",
    "kamar": "B / 52"
  },
  {
    "nama": "HENDRA BIN ALM. AMRI",
    "perkara": "Narkotika",
    "kamar": "B / 59"
  },
  {
    "nama": "JOHAN PAHME NASUTION BIN H.A MUNIP NASUTION",
    "perkara": "Narkotika",
    "kamar": "B / 63"
  },
  {
    "nama": "FIRMAN ALIAS PIMEN BIN SAFRAN",
    "perkara": "Narkotika",
    "kamar": "C / 68"
  },
  {
    "nama": "RAISUL MULIADY BIN SAFWAN (Alm)",
    "perkara": "Narkotika",
    "kamar": "B / 57"
  },
  {
    "nama": "YADI ATMAN BIN JAMALUDDIN",
    "perkara": "Narkotika",
    "kamar": "A / 16"
  },
  {
    "nama": "MARAHALIM, S.P. BIN H. JAMSYAH",
    "perkara": "Korupsi",
    "kamar": "A / 24"
  },
  {
    "nama": "ANANTA TOUW BIN UMAR TOUW",
    "perkara": "Narkotika",
    "kamar": "B / 58"
  },
  {
    "nama": "MUHAMMAD NABAWI ALIAS AYI BIN ZULKIFLI DAUD",
    "perkara": "Narkotika",
    "kamar": "A / 16"
  },
  {
    "nama": "AULIA BIN ISKANDAR",
    "perkara": "Narkotika",
    "kamar": "A / 33"
  },
  {
    "nama": "SULAIMAN ID BIN IDRIS",
    "perkara": "Kesusilaan",
    "kamar": "B / 63"
  },
  {
    "nama": "JEFRI SANJAYA BIN KAMARUDDIN",
    "perkara": "Narkotika",
    "kamar": "B / 63"
  },
  {
    "nama": "M. REJA, S.T.,BIN RUSLI",
    "perkara": "Narkotika",
    "kamar": "C / 68"
  },
  {
    "nama": "YUSRIZAL BIN ABKAR",
    "perkara": "Korupsi",
    "kamar": "B / 62"
  },
  {
    "nama": "RUDI RINANDA BIN M. NASIR",
    "perkara": "Kesusilaan",
    "kamar": "B / 48"
  },
  {
    "nama": "ODIANTRI BIN Almarhum NYAK DAUD HAS",
    "perkara": "Korupsi",
    "kamar": "B / 61"
  },
  {
    "nama": "SYAMSUDDIN BIN Almarhum SARONG",
    "perkara": "Korupsi",
    "kamar": "B / 63"
  },
  {
    "nama": "EDI SAPUTRA BIN ISMAIL AHMAD",
    "perkara": "Peraturan Daerah",
    "kamar": "B / 53"
  },
  {
    "nama": "MARWAN BIN HUSEN",
    "perkara": "Korupsi",
    "kamar": "C / 66"
  },
  {
    "nama": "ULFAN BIN EFI SAPUTRA",
    "perkara": "Narkotika",
    "kamar": "C / 68"
  },
  {
    "nama": "FERY FADLI BIN (ALM) RAMLI",
    "perkara": "Narkotika",
    "kamar": "B / 49"
  },
  {
    "nama": "SUHENDRA BIN JUNAIDI",
    "perkara": "Narkotika",
    "kamar": "B / 55"
  },
  {
    "nama": "ZULKARNAINI BIN HASBI",
    "perkara": "Narkotika",
    "kamar": "B / 64"
  },
  {
    "nama": "SOFYAN HASAN Alias ABU BIN M. HASAN",
    "perkara": "Narkotika",
    "kamar": "C / 66"
  },
  {
    "nama": "ZULFIKAR BIN M. YUSUF",
    "perkara": "Korupsi",
    "kamar": "B / 53"
  },
  {
    "nama": "SUWANDI A L BIN almarhum ABDUL LATIF",
    "perkara": "Narkotika",
    "kamar": "A / 24"
  },
  {
    "nama": "SAMSUAR BIN RIDWAN",
    "perkara": "Narkotika",
    "kamar": "C / 66"
  },
  {
    "nama": "ZAINAL ABIDIN BIN ALM.PUTEH",
    "perkara": "Peraturan Daerah",
    "kamar": "B / 57"
  },
  {
    "nama": "ROKI RAHMAD BIN MUZAKIR NURDIN",
    "perkara": "Narkotika",
    "kamar": "B / 54"
  },
  {
    "nama": "SAMSUARDI BIN ABDULLAH",
    "perkara": "Narkotika",
    "kamar": "A / 25"
  },
  {
    "nama": "MUHAMMAD ROYANI BIN RUSLAN",
    "perkara": "Pencurian",
    "kamar": "B / 61"
  },
  {
    "nama": "ROMI APRIANDIKA BIN SURIYONO",
    "perkara": "Narkotika",
    "kamar": "B / 62"
  },
  {
    "nama": "ADE SAFRIZAL BIN AHMAD HUSEN",
    "perkara": "Narkotika",
    "kamar": "MAPENALING / 3"
  },
  {
    "nama": "REZA FAHLEVI BIN AGUSRI ARSYAD",
    "perkara": "Narkotika",
    "kamar": "C / 66"
  },
  {
    "nama": "IKBAL BIN ABDULLAH",
    "perkara": "Korupsi",
    "kamar": "C / 66"
  },
  {
    "nama": "ISKANDAR BIN (Almarhum) IDRIS",
    "perkara": "Narkotika",
    "kamar": "B / 55"
  },
  {
    "nama": "KAMARUDDIN alias JOL BIN IBRAHIM",
    "perkara": "Narkotika",
    "kamar": "B / 51"
  },
  {
    "nama": "WAHYU RIZKI PERDANA BIN (Almarhum) AMIRUDDIN",
    "perkara": "Narkotika",
    "kamar": "B / 63"
  },
  {
    "nama": "JONNI YANDA BIN Alm M. YUNUS AMIN",
    "perkara": "Narkotika",
    "kamar": "A / 25"
  },
  {
    "nama": "SOFYAN BIN BIN ZAKARIA",
    "perkara": "Narkotika",
    "kamar": "B / 54"
  },
  {
    "nama": "T. MEURAH DIDI ISKANDAR BIN T. MEURAH JAMIL",
    "perkara": "Narkotika",
    "kamar": "B / 54"
  },
  {
    "nama": "FAHRIZAL SYAHPUTRA BIN (Alm) SYAHRIAL",
    "perkara": "Narkotika",
    "kamar": "B / 57"
  },
  {
    "nama": "SARYULIS BIN HASANUSI",
    "perkara": "Penggelapan",
    "kamar": "B / 58"
  },
  {
    "nama": "MUHAMMAD NUR BIN HUSEN",
    "perkara": "Perlindungan Anak",
    "kamar": "B / 52"
  },
  {
    "nama": "MAIMUN SALEH BIN SALEH",
    "perkara": "Narkotika",
    "kamar": "B / 65"
  },
  {
    "nama": "ROMI SYAHPUTRA BIN ALM RAZALI ABBAS",
    "perkara": "Pencurian",
    "kamar": "B / 57"
  },
  {
    "nama": "HAMDANI BIN ALM ALI NODAN",
    "perkara": "Pencurian",
    "kamar": "B / 50"
  },
  {
    "nama": "NASRUDDIN M. DAUD BIN M. DAUD",
    "perkara": "Narkotika",
    "kamar": "C / 66"
  },
  {
    "nama": "AMIRUDDIN BIN MUHAMMAD ARRAHMAN",
    "perkara": "Narkotika",
    "kamar": "B / 57"
  },
  {
    "nama": "SAYED ZULFIKAR BIN SAYED M. ALI",
    "perkara": "Narkotika",
    "kamar": "C / 66"
  },
  {
    "nama": "JIMMY SARWENDY BIN WAGIMAN",
    "perkara": "Narkotika",
    "kamar": "C / 66"
  },
  {
    "nama": "RISKI FAYRANDA BIN (ALM) FAISAL",
    "perkara": "Narkotika",
    "kamar": "B / 49"
  },
  {
    "nama": "JAMIL MARTHA BIN (ALM) SYARIFUDDIN",
    "perkara": "Narkotika",
    "kamar": "B / 59"
  },
  {
    "nama": "SYAHRIL, S BIN SYAHDAN",
    "perkara": "Narkotika",
    "kamar": "B / 59"
  },
  {
    "nama": "MAHESSA DARMA BIN MANSYUR",
    "perkara": "Narkotika",
    "kamar": "B / 49"
  },
  {
    "nama": "ANGGA NATA SUANDA BIN (ALM) MUCHSIN",
    "perkara": "Narkotika",
    "kamar": "A / 25"
  },
  {
    "nama": "RIZKI WAN FAJRY BIN HUSNI PRIADI",
    "perkara": "Kesusilaan",
    "kamar": "B / 63"
  },
  {
    "nama": "MUHAMMAD NADIR BIN RAJAB",
    "perkara": "Perlindungan Anak",
    "kamar": "B / 65"
  },
  {
    "nama": "MUHAMMAD ZULFIKAR BIN HASAN OTMAN",
    "perkara": "Kekerasan Seksual",
    "kamar": "B / 62"
  },
  {
    "nama": "IMAM FADLY BIN SOLIHIN",
    "perkara": "Narkotika",
    "kamar": "C / 70"
  },
  {
    "nama": "AHMAT YUSRI BIN MATSURI",
    "perkara": "Narkotika",
    "kamar": "B / 56"
  },
  {
    "nama": "ILYIN BURHAN ALIAS GOYENG BIN BURHANUDDIN",
    "perkara": "Narkotika",
    "kamar": "C / 66"
  },
  {
    "nama": "MUNIR BIN ABDUL MAJID",
    "perkara": "Narkotika",
    "kamar": "B / 56"
  },
  {
    "nama": "MAWARDI MARZUKI BIN MARZUKI",
    "perkara": "Narkotika",
    "kamar": "B / 63"
  },
  {
    "nama": "MUHAMMAD SETIA BIN ALM. H. DAUD HASYIM",
    "perkara": "Memalsu Materai / Surat",
    "kamar": "B / 50"
  },
  {
    "nama": "ZUL PENDI BIN FARID AMIN",
    "perkara": "Narkotika",
    "kamar": "B / 64"
  },
  {
    "nama": "RISKI JULIANSYAH BIN NASRUDDIN",
    "perkara": "Narkotika",
    "kamar": "B / 61"
  },
  {
    "nama": "ARIS WANDA BIN MANYUNI",
    "perkara": "Narkotika",
    "kamar": "B / 65"
  },
  {
    "nama": "MUHAMMAD HARIS BIN SUFRIADI YAHYA",
    "perkara": "Narkotika",
    "kamar": "C / 66"
  },
  {
    "nama": "AFIFUDDIN BIN M. ALI MUSA",
    "perkara": "Narkotika",
    "kamar": "B / 55"
  },
  {
    "nama": "AFNAN BIN NAZARUDDIN",
    "perkara": "Narkotika",
    "kamar": "B / 55"
  },
  {
    "nama": "RUDI AFRIANTO BIN ANWAR",
    "perkara": "Narkotika",
    "kamar": "B / 54"
  },
  {
    "nama": "HAMDANI BIN SAFARUDDIN",
    "perkara": "Korupsi",
    "kamar": "B / 58"
  },
  {
    "nama": "MAHDI, S.PD.,M.PD. BIN (ALMARHUM) ABDUL HAMID",
    "perkara": "Korupsi",
    "kamar": "A / 33"
  },
  {
    "nama": "MUHAMMAD,S.P BIN ABDULLAH",
    "perkara": "Korupsi",
    "kamar": "A / 33"
  },
  {
    "nama": "ARIF FIRTANA LUBIS BIN ALMARHUM FADAL LUBIS",
    "perkara": "Narkotika",
    "kamar": "B / 52"
  },
  {
    "nama": "ZAKANEDI, S.SOS ALIAS JAR BIN SANUDIN",
    "perkara": "Korupsi",
    "kamar": "B / 62"
  },
  {
    "nama": "T. FIRMANSYAH RF BIN T. BUDIMANSYAH",
    "perkara": "Narkotika",
    "kamar": "B / 53"
  },
  {
    "nama": "SAHNAN BIN KARMAN",
    "perkara": "Narkotika",
    "kamar": "A / 16"
  },
  {
    "nama": "RIDWAN BIN USMAN",
    "perkara": "Narkotika",
    "kamar": "B / 65"
  },
  {
    "nama": "ANDI HERWANDA BIN HARIYANTO",
    "perkara": "Narkotika",
    "kamar": "B / 43"
  },
  {
    "nama": "MISMIADI BIN MUHAMMAD IDRIS",
    "perkara": "Narkotika",
    "kamar": "C / 66"
  },
  {
    "nama": "RAHMAT HIDAYAT ALIAS WAHET BIN SYUKRI",
    "perkara": "Narkotika",
    "kamar": "B / 55"
  },
  {
    "nama": "WIN HENDRY SETIAWANDI BIN AHMADI GAYO",
    "perkara": "Narkotika",
    "kamar": "B / 62"
  },
  {
    "nama": "SYAHRIAL HADITYA, S.P BIN SANUSI A. JALIL",
    "perkara": "Korupsi",
    "kamar": "B / 47"
  },
  {
    "nama": "BUDI HARTONO BIN MISRAN",
    "perkara": "Korupsi",
    "kamar": "B / 65"
  },
  {
    "nama": "ZAINAL ABIDIN BIN ABDURRAHMAN",
    "perkara": "Narkotika",
    "kamar": "B / 62"
  },
  {
    "nama": "MASYKUR ZA BIN ZAINAL ABIDIN",
    "perkara": "Narkotika",
    "kamar": "B / 62"
  },
  {
    "nama": "ALVI RIZKINA BIN NAZARUDDIN",
    "perkara": "Narkotika",
    "kamar": "B / 49"
  },
  {
    "nama": "SARMAN S.Pd.I BIN Alm.H.NYAK KILUN",
    "perkara": "Korupsi",
    "kamar": "B / 51"
  },
  {
    "nama": "RIZAL JUMALDI BIN M. DAHLAN",
    "perkara": "Narkotika",
    "kamar": "B / 45"
  },
  {
    "nama": "AMIRUDDIN ALIAS AMIR BIN (ALM) HASAN",
    "perkara": "Pencurian",
    "kamar": "B / 62"
  },
  {
    "nama": "FREDDY KURNIAWAN ALIAS KHO KHAM THUNG BIN KHO KHUE SION",
    "perkara": "Narkotika",
    "kamar": "A / 30"
  },
  {
    "nama": "MUHAMMAD ANDI ALIAS AMAD BIN DAHLAN",
    "perkara": "Peraturan Daerah",
    "kamar": "B / 65"
  },
  {
    "nama": "JAILANI BIN (ALM) JUNED",
    "perkara": "Narkotika",
    "kamar": "B / 52"
  },
  {
    "nama": "DOHAR L. TOBING BIN RUSLI EFENDI TOBING",
    "perkara": "Pencurian",
    "kamar": "MAPENALING / 7"
  },
  {
    "nama": "MUHAMMAD ANAH BIN RUSLI",
    "perkara": "Korupsi",
    "kamar": "A / 13"
  },
  {
    "nama": "MAHDI BIN ILYAS",
    "perkara": "Korupsi",
    "kamar": "A / 34"
  },
  {
    "nama": "DODI ANSHARI, ST., MAPPI (CERT) BIN H. MAS'UD",
    "perkara": "Korupsi",
    "kamar": "A / 36"
  },
  {
    "nama": "RAHMAT HIDAYATSYAH BIN MAWARDI",
    "perkara": "Narkotika",
    "kamar": "A / 17"
  },
  {
    "nama": "T. RAMLI ANGKASA, SE.Ak., M.Si BIN TM HASYIM",
    "perkara": "Korupsi",
    "kamar": "B / 40"
  },
  {
    "nama": "AFRIZAL BAKRI, S.HI BIN BAKRI M. JALIL",
    "perkara": "Korupsi",
    "kamar": "B / 40"
  },
  {
    "nama": "SYIAMUDDIN BIN M. AMIR",
    "perkara": "Korupsi",
    "kamar": "MAPENALING / 6"
  },
  {
    "nama": "HELMI IRAWAN BIN ABDUL RAHMAN RAMLI",
    "perkara": "Narkotika",
    "kamar": "C / 66"
  },
  {
    "nama": "MUHAMMAD AFANDI BIN RUDI AFANDI",
    "perkara": "Narkotika",
    "kamar": "B / 58"
  },
  {
    "nama": "HAIRUL MUNADI, S.E., M.M., BIN (ALMARHUM) MANSUR",
    "perkara": "Korupsi",
    "kamar": "B / 47"
  },
  {
    "nama": "SUPRIZAL SYAH ALS BLACK BIN (ALM) SUDIRMAN",
    "perkara": "Narkotika",
    "kamar": "A / 25"
  },
  {
    "nama": "JUMARIN SOPI ALS JUMARIN BIN ABDUL HAMID",
    "perkara": "Korupsi",
    "kamar": "B / 48"
  },
  {
    "nama": "AMIRUDDIN BIN (ALM) ILYAS YUSUF",
    "perkara": "Penipuan",
    "kamar": "A / 16"
  },
  {
    "nama": "ZULFURQAN BIN M. RAZI",
    "perkara": "Pembunuhan",
    "kamar": "B / 50"
  },
  {
    "nama": "ADNAN BIN M YUSUF ARRAHMAN",
    "perkara": "Narkotika",
    "kamar": "B / 65"
  },
  {
    "nama": "MUSLIADI BIN MUSTAFA YAHYA",
    "perkara": "Narkotika",
    "kamar": "B / 56"
  },
  {
    "nama": "NANDO LUBIS BIN AMIRUDDIN",
    "perkara": "Narkotika",
    "kamar": "A / 16"
  },
  {
    "nama": "IRWAN BIN RAZALI",
    "perkara": "Narkotika",
    "kamar": "B / 53"
  },
  {
    "nama": "DEDI RAHMAT BIN (ALM) M. ADAM",
    "perkara": "Narkotika",
    "kamar": "B / 52"
  },
  {
    "nama": "MUHAMMAD WAHYU BIN IRAWAN",
    "perkara": "Narkotika",
    "kamar": "A / 18"
  },
  {
    "nama": "FAJAR RAMADHAN BIN MARZUKI",
    "perkara": "Narkotika",
    "kamar": "B / 61"
  },
  {
    "nama": "M. NASIR ALIAS NGOH BIN (alm) ABDUL RASYID",
    "perkara": "Narkotika",
    "kamar": "A / 21"
  },
  {
    "nama": "MUHAMMAD RIZA BIN EFENDI",
    "perkara": "Narkotika",
    "kamar": "B / 60"
  },
  {
    "nama": "SYUKRI BIN ASNAWI",
    "perkara": "Narkotika",
    "kamar": "B / 56"
  },
  {
    "nama": "SAIFUL BIN ILYAS",
    "perkara": "Narkotika",
    "kamar": "B / 60"
  },
  {
    "nama": "NAZARUDDIN BIN AMIRUDDIN",
    "perkara": "Narkotika",
    "kamar": "B / 61"
  },
  {
    "nama": "RONI ANDRIANSYAH ALIAS RONI BIN (ALM) ABDURRAHMAN",
    "perkara": "Pencurian",
    "kamar": "B / 56"
  },
  {
    "nama": "HUSAINI ALIAS APANI ALIAS BANG NI BIN M. YUSUF",
    "perkara": "Peraturan Daerah",
    "kamar": "B / 54"
  },
  {
    "nama": "MELDIANSYAH BIN ZAMZAMI",
    "perkara": "Penggelapan",
    "kamar": "B / 63"
  },
  {
    "nama": "IRUL ALI BIN (ALM) INSYA",
    "perkara": "Pencurian",
    "kamar": "A / 14"
  },
  {
    "nama": "MUHAMMAD AKBAR BIN BURHAN YUNUS",
    "perkara": "Narkotika",
    "kamar": "B / 52"
  },
  {
    "nama": "ISLAMUDDIN BIN (ALM) BUSTAMI USMAN",
    "perkara": "Narkotika",
    "kamar": "B / 54"
  },
  {
    "nama": "HERMAWAN BIN M. HASAN",
    "perkara": "Pencurian",
    "kamar": "B / 60"
  },
  {
    "nama": "AIDI AKHYAR BIN NAZARUDDIN",
    "perkara": "Korupsi",
    "kamar": "B / 42"
  },
  {
    "nama": "IDRIS BIN WAHID YAKUB",
    "perkara": "Narkotika",
    "kamar": "A / 16"
  },
  {
    "nama": "MUHAMMAD ANAFIA BIN ANWAR",
    "perkara": "Narkotika",
    "kamar": "A / 15"
  },
  {
    "nama": "HENDRI SAPUTRA BIN BACHTIAR",
    "perkara": "Narkotika",
    "kamar": "B / 50"
  },
  {
    "nama": "DEDI MARSONI BIN JAFARUDDIN",
    "perkara": "Narkotika",
    "kamar": "B / 64"
  },
  {
    "nama": "TARMIZI ALIAS ODON BIN HASAN",
    "perkara": "Narkotika",
    "kamar": "B / 45"
  },
  {
    "nama": "NURIANTO BIN JUMALI",
    "perkara": "Narkotika",
    "kamar": "B / 65"
  },
  {
    "nama": "SAFENDI BIN YUSUF",
    "perkara": "Narkotika",
    "kamar": "C / 70"
  },
  {
    "nama": "HERU JUANDA BIN MUCHTAR",
    "perkara": "Penipuan",
    "kamar": "C / 67"
  },
  {
    "nama": "AHMAD WAFA BIN ALM MUHAMMAD DAUD REUMANTAN",
    "perkara": "Penggelapan",
    "kamar": "C / 67"
  },
  {
    "nama": "MAHDAN BIN (ALM) MUHAMMAD",
    "perkara": "Korupsi",
    "kamar": "A / 16"
  },
  {
    "nama": "MUHAMMAD HAEKAL BIN SURIADI",
    "perkara": "Narkotika",
    "kamar": "B / 64"
  },
  {
    "nama": "MURDANI BIN HASAN",
    "perkara": "Narkotika",
    "kamar": "B / 59"
  },
  {
    "nama": "MAULIZAR SAPUTRA BIN NURDIN",
    "perkara": "Narkotika",
    "kamar": "B / 60"
  },
  {
    "nama": "DEDE DWIPAYANA BIN M. YAHYA",
    "perkara": "Narkotika",
    "kamar": "A / 19"
  },
  {
    "nama": "IRMA DARMA BIN (ALM) M. YUSUF",
    "perkara": "Narkotika",
    "kamar": "MAPENALING / 4"
  },
  {
    "nama": "ILHAM MAULANA BIN RAZALI M. SALEH",
    "perkara": "Narkotika",
    "kamar": "B / 43"
  },
  {
    "nama": "MUNIRWAN BIN ZULKIFLI",
    "perkara": "Narkotika",
    "kamar": "A / 23"
  },
  {
    "nama": "ISARIANDI BIN MUSTAFA",
    "perkara": "Narkotika",
    "kamar": "B / 58"
  },
  {
    "nama": "KHAIRU ALFISYAHRIN BIN ARMANSYAH.MS",
    "perkara": "Narkotika",
    "kamar": "A / 15"
  },
  {
    "nama": "SUHENDRI BIN ALM. MAHDAN HASYIM",
    "perkara": "Narkotika",
    "kamar": "MAPENALING / 4"
  },
  {
    "nama": "ERWIN SAPUTRA BIN M YUSUF",
    "perkara": "Narkotika",
    "kamar": "B / 60"
  },
  {
    "nama": "AGUS SALIM BIN RIDWAN",
    "perkara": "Narkotika",
    "kamar": "A / 19"
  },
  {
    "nama": "HANAF MAHDI BIN (ALM.) HANAFIAH",
    "perkara": "Narkotika",
    "kamar": "A / 26"
  },
  {
    "nama": "KHAIRUMAN BIN ALM RUSLAN",
    "perkara": "Penggelapan",
    "kamar": "B / 61"
  },
  {
    "nama": "SANUSI BIN ADNAN",
    "perkara": "Peraturan Daerah",
    "kamar": "B / 52"
  },
  {
    "nama": "RIDWAN BIN ALM MUHAMMAD HASAN",
    "perkara": "Narkotika",
    "kamar": "B / 59"
  },
  {
    "nama": "SAIFUL MAHDI BIN ZULKIFLI",
    "perkara": "Narkotika",
    "kamar": "A / 20"
  },
  {
    "nama": "ACHMAD YANI IKBAL BIN ALM. SOFYAN ADAM",
    "perkara": "Narkotika",
    "kamar": "B / 55"
  },
  {
    "nama": "AZWIN BIN MAHMUD YAHYA",
    "perkara": "Narkotika",
    "kamar": "B / 65"
  },
  {
    "nama": "M. IQBAL BIN M. NUR ABDULLAH",
    "perkara": "Narkotika",
    "kamar": "A / 18"
  },
  {
    "nama": "YUDHA ABDI KURNIAWAN BIN ARIF PRIBADI",
    "perkara": "Narkotika",
    "kamar": "B / 62"
  },
  {
    "nama": "KARUNIA RAHMAT BIN SUDARMADI",
    "perkara": "Narkotika",
    "kamar": "A / 20"
  },
  {
    "nama": "ROY MADANI BIN ABU BAKAR",
    "perkara": "Narkotika",
    "kamar": "B / 64"
  },
  {
    "nama": "MUHAMMAD NADID BIN SULAIMAN",
    "perkara": "Narkotika",
    "kamar": "B / 56"
  },
  {
    "nama": "REZA HARLIANSYAH BIN ALM. ISHAR YUSUF",
    "perkara": "Narkotika",
    "kamar": "B / 50"
  },
  {
    "nama": "AMIR MUKHTARIM BIN M. ISA",
    "perkara": "Narkotika",
    "kamar": "B / 56"
  },
  {
    "nama": "ZULFAHMI ALIAS BOM BOM BIN SYUKRI",
    "perkara": "Narkotika",
    "kamar": "A / 20"
  },
  {
    "nama": "AGIL MAULANA BIN SAFRIZAL",
    "perkara": "Narkotika",
    "kamar": "MAPENALING / 7"
  },
  {
    "nama": "T. SAIFULLAH BIN ALM. T. USMAN",
    "perkara": "Penggelapan",
    "kamar": "B / 64"
  },
  {
    "nama": "SELAMAT ARAGANTI ALIAS ARA BIN (ALM) SYARIFUDDIN",
    "perkara": "Peraturan Daerah",
    "kamar": "B / 47"
  },
  {
    "nama": "RIZKI PERDANA PUTRA BIN M. NUR DAUD",
    "perkara": "Narkotika",
    "kamar": "A / 23"
  },
  {
    "nama": "YUSTIAR BIN NASIB",
    "perkara": "Narkotika",
    "kamar": "B / 50"
  },
  {
    "nama": "MUHAMMAD FERDIANSYAH BIN MASHURI",
    "perkara": "Memalsu Materai / Surat",
    "kamar": "C / 67"
  },
  {
    "nama": "FERI SANDRIA BIN SAMSUL BAHRI IBRAHIM",
    "perkara": "Memalsu Materai / Surat",
    "kamar": "B / 61"
  },
  {
    "nama": "SEVEN MEI SINAGA",
    "perkara": "Penipuan",
    "kamar": "B / 56"
  },
  {
    "nama": "LIWA UL HAMDI BIN HAMZAH",
    "perkara": "Narkotika",
    "kamar": "A / 18"
  },
  {
    "nama": "IKRAM BIN ZAKARIA",
    "perkara": "Narkotika",
    "kamar": "B / 57"
  },
  {
    "nama": "M. NAUFAL AL FATTA BIN MAKMUR SAPUTRA",
    "perkara": "Perlindungan Anak",
    "kamar": "B / 45"
  },
  {
    "nama": "IFFAT MUHAMMAD ROZAN BIN HARLI",
    "perkara": "Perlindungan Anak",
    "kamar": "C / 66"
  },
  {
    "nama": "ZULFIKAR ALIAS ANDRE BIN EFENDI",
    "perkara": "Perlindungan Anak",
    "kamar": "C / 66"
  },
  {
    "nama": "M. ZAINI BIN ABDULLAH",
    "perkara": "Narkotika",
    "kamar": "A / 15"
  },
  {
    "nama": "MUCHSALMINA BIN NURDIN",
    "perkara": "Narkotika",
    "kamar": "A / 15"
  },
  {
    "nama": "FEGI OCTAVIAN ALFAYET BIN ALI MUHAMMAD",
    "perkara": "Narkotika",
    "kamar": "A / 30"
  },
  {
    "nama": "M. THAMRIN BIN TARMIZI",
    "perkara": "Pencurian",
    "kamar": "A / 13"
  },
  {
    "nama": "LILIK SUHENDRA BIN ALMARHUM SUGITO",
    "perkara": "Narkotika",
    "kamar": "B / 58"
  },
  {
    "nama": "SUPRIADI BIN AMIRUDDIN",
    "perkara": "Penggelapan",
    "kamar": "B / 65"
  },
  {
    "nama": "RAMLI ALS BANG ADIK BIN M. JUNED",
    "perkara": "Pencurian",
    "kamar": "B / 64"
  },
  {
    "nama": "AULIA ADRIASYAH BIN H. UMRAH",
    "perkara": "Narkotika",
    "kamar": "B / 63"
  },
  {
    "nama": "FAKHRIZAL BIN BAKHTIAR",
    "perkara": "Pencurian",
    "kamar": "A / 16"
  },
  {
    "nama": "TAUFIK HIDAYAT ALIAS TOPIK BIN ALM M. JAMAL",
    "perkara": "Pencurian",
    "kamar": "B / 59"
  },
  {
    "nama": "MUHAMMD AZEEM",
    "perkara": "Keimigrasian",
    "kamar": "B / 51"
  },
  {
    "nama": "ARIEF MAULANA BIN ANWAR SANUSI",
    "perkara": "Narkotika",
    "kamar": "A / 23"
  },
  {
    "nama": "M. FAKHRUL RAMADHAN BIN ABD HADI",
    "perkara": "Peraturan Daerah",
    "kamar": "B / 62"
  },
  {
    "nama": "drh. ASRIJAL JUNAIDI BIN (ALM.) UMAR T",
    "perkara": "Korupsi",
    "kamar": "B / 51"
  },
  {
    "nama": "FIRDAUS BIN SAFRI",
    "perkara": "Korupsi",
    "kamar": "MAPENALING / 6"
  },
  {
    "nama": "DICKI MAULANA BIN YUSUF WAHAB",
    "perkara": "Narkotika",
    "kamar": "B / 63"
  },
  {
    "nama": "JUNAWAN BIN SUHARTO",
    "perkara": "Narkotika",
    "kamar": "B / 62"
  },
  {
    "nama": "DWI PUTRA ANANDA RESTU ALIAS SI CHEK ALIAS SI NYAK BIN FADHLI DAUD",
    "perkara": "Pencurian",
    "kamar": "B / 59"
  },
  {
    "nama": "ZULFITRI BIN ABDUL RAZAK",
    "perkara": "Narkotika",
    "kamar": "B / 62"
  },
  {
    "nama": "SURAL FUADI BIN IBRAHIM",
    "perkara": "Korupsi",
    "kamar": "B / 44"
  },
  {
    "nama": "FARIANDI BIN M. YUNSYAH",
    "perkara": "Narkotika",
    "kamar": "A / 12"
  },
  {
    "nama": "BONDAN PERKASA BIN SUMARDI",
    "perkara": "Narkotika",
    "kamar": "B / 50"
  },
  {
    "nama": "SAFRIYANTO BIN SUPARNO",
    "perkara": "Narkotika",
    "kamar": "A / 14"
  },
  {
    "nama": "MUHAMMAD SYARUL BIN HAZARATUL ASWAD",
    "perkara": "Narkotika",
    "kamar": "B / 64"
  },
  {
    "nama": "ANWAR BIN SULAIMAN DAUD",
    "perkara": "Narkotika",
    "kamar": "A / 12"
  },
  {
    "nama": "JUNAIDI BIN DAHLAN SULAIMAN",
    "perkara": "Narkotika",
    "kamar": "A / 18"
  },
  {
    "nama": "FARHAN BIN H. JOHAN",
    "perkara": "Narkotika",
    "kamar": "B / 55"
  },
  {
    "nama": "SAFRANI BIN ZULKIFLI",
    "perkara": "Narkotika",
    "kamar": "B / 65"
  },
  {
    "nama": "MISBAHUDDIN BIN M. NASIR NURDIN",
    "perkara": "Narkotika",
    "kamar": "A / 15"
  },
  {
    "nama": "RAHMAD AKBAR BIN ZUBIR",
    "perkara": "Narkotika",
    "kamar": "MAPENALING / 7"
  },
  {
    "nama": "DERIANSYAH LUBIS BIN HIDAYAT LUBIS",
    "perkara": "Narkotika",
    "kamar": "B / 52"
  },
  {
    "nama": "ABDULLAH BIN SULAIMAN",
    "perkara": "Peraturan Daerah",
    "kamar": "B / 64"
  },
  {
    "nama": "SUWARZAL BIN (ALM) ZAINAL ABIDIN",
    "perkara": "Narkotika",
    "kamar": "B / 60"
  },
  {
    "nama": "MUHAMMAD NASIR BIN MARKUS",
    "perkara": "Narkotika",
    "kamar": "B / 45"
  },
  {
    "nama": "TAUFIK ICHSAN BIN M. YUSUF",
    "perkara": "Narkotika",
    "kamar": "A / 12"
  },
  {
    "nama": "RIFKI ANANDA BIN ALM. SYAUKANI MUHAMMAD",
    "perkara": "Narkotika",
    "kamar": "B / 53"
  },
  {
    "nama": "MUKHLIZAR BIN AMRAN",
    "perkara": "Narkotika",
    "kamar": "A / 22"
  },
  {
    "nama": "ZULKHAISI BIN IBNU HASYIM",
    "perkara": "Narkotika",
    "kamar": "A / 18"
  },
  {
    "nama": "CHALIDIN M. ISA BIN (ALM) M. ISA",
    "perkara": "Pencurian",
    "kamar": "C / 66"
  },
  {
    "nama": "MUHAMMAD FURQAN BIN M. NASIR SANDANG",
    "perkara": "Narkotika",
    "kamar": "B / 53"
  },
  {
    "nama": "SUKMA FAUZI BIN SUDAR",
    "perkara": "Jaminan Fidusia",
    "kamar": "A / 29"
  },
  {
    "nama": "ROMY RISKI AFIANDA BIN MUCHTAR",
    "perkara": "Pencurian",
    "kamar": "A / 23"
  },
  {
    "nama": "MURIZAL BIN SAMSUDDIN",
    "perkara": "Narkotika",
    "kamar": "A / 26"
  },
  {
    "nama": "MUHAMMAD IQBAL BIN M. YUSUF AHMAD",
    "perkara": "Narkotika",
    "kamar": "MAPENALING / 7"
  },
  {
    "nama": "SURIADY BIN M. JALIL",
    "perkara": "Narkotika",
    "kamar": "B / 60"
  },
  {
    "nama": "TARMIZI BIN M. NUR",
    "perkara": "Narkotika",
    "kamar": "B / 62"
  },
  {
    "nama": "SUBHAN BIN NURDIN",
    "perkara": "Narkotika",
    "kamar": "A / 32"
  },
  {
    "nama": "SUDARMAN BIN ALM. ABDUL AZIZ",
    "perkara": "Jaminan Fidusia",
    "kamar": "B / 42"
  },
  {
    "nama": "M. RIZAL BIN T. RASMUDDIN",
    "perkara": "Narkotika",
    "kamar": "A / 21"
  },
  {
    "nama": "ANDRI RINANDA BIN HERMAN",
    "perkara": "Penggelapan",
    "kamar": "A / 26"
  },
  {
    "nama": "ZAMZAMI BIN ALM M. ZAM",
    "perkara": "Narkotika",
    "kamar": "A / 13"
  },
  {
    "nama": "IRFAN RIZKI NUGRAHA, S.M BIN ISNAIDI DAHLAN, S.T",
    "perkara": "Informasi dan Transaksi Elektronik",
    "kamar": "MAPENALING / 2"
  },
  {
    "nama": "MUSLEM BIN SULAIMAN",
    "perkara": "Peraturan Daerah",
    "kamar": "A / 24"
  },
  {
    "nama": "AMRIZAL BIN (ALM) M. JAMIL",
    "perkara": "Peraturan Daerah",
    "kamar": "B / 60"
  },
  {
    "nama": "FADIL MAHYAR BIN AHMADIYAH",
    "perkara": "Penggelapan",
    "kamar": "B / 53"
  },
  {
    "nama": "T. DHIKA RAHMAD BIN HARDI YUZAR",
    "perkara": "Narkotika",
    "kamar": "C / 68"
  },
  {
    "nama": "MUHAMMAD SYAHNAN BIN ALM NUR SANIP",
    "perkara": "Narkotika",
    "kamar": "A / 12"
  },
  {
    "nama": "SYARYULIS BIN ALM SYUIB",
    "perkara": "Narkotika",
    "kamar": "A / 14"
  },
  {
    "nama": "TAKDIR BIN BASRI",
    "perkara": "Narkotika",
    "kamar": "A / 13"
  },
  {
    "nama": "RIDWAN BIN ALM. T. CUT AHMAD",
    "perkara": "Korupsi",
    "kamar": "A / 36"
  },
  {
    "nama": "RAHMAD HIDAYAT BIN ALM RUSDI",
    "perkara": "Penggelapan",
    "kamar": "B / 61"
  },
  {
    "nama": "SAMUDAHTI BERASA BIN WALLIN BERASA",
    "perkara": "Pencurian",
    "kamar": "B / 64"
  },
  {
    "nama": "SAMSUARDI BIN ALM M DAUD",
    "perkara": "Narkotika",
    "kamar": "A / 24"
  },
  {
    "nama": "IRSYAD YUNAZ FARHAN BIN (ALM) AZWAR BA",
    "perkara": "Pencurian",
    "kamar": "A / 22"
  },
  {
    "nama": "ZULMANSYAH BIN ALM SYAMSUDIN",
    "perkara": "Narkotika",
    "kamar": "A / 22"
  },
  {
    "nama": "PUTRA HAJI JUMADILLAH BIN RUSLI SABI",
    "perkara": "Pencurian",
    "kamar": "A / 26"
  },
  {
    "nama": "RAHMAD SAPUTRA BIN ZAINUDDIN",
    "perkara": "Narkotika",
    "kamar": "A / 19"
  },
  {
    "nama": "NOVAL AHZHAKI BIN MANSUR",
    "perkara": "Narkotika",
    "kamar": "A / 23"
  },
  {
    "nama": "MUNZIR BIN M.JUNED",
    "perkara": "Narkotika",
    "kamar": "A / 12"
  },
  {
    "nama": "MUHAMMAD RIZAL BIN ABDUL GANI",
    "perkara": "Narkotika",
    "kamar": "A / 22"
  },
  {
    "nama": "AULIA MAULANA BIN ASRI ISMAIL",
    "perkara": "Narkotika",
    "kamar": "B / 62"
  },
  {
    "nama": "RIFKI BIN RUSLI YAHYA",
    "perkara": "Narkotika",
    "kamar": "A / 21"
  },
  {
    "nama": "RISKI RAJA UBIT BIN JAUHARI",
    "perkara": "Narkotika",
    "kamar": "A / 12"
  },
  {
    "nama": "EDWAR SANUSI BIN HASBI",
    "perkara": "Narkotika",
    "kamar": "A / 20"
  },
  {
    "nama": "HARI BIN T. JUNAIDA",
    "perkara": "Narkotika",
    "kamar": "A / 18"
  },
  {
    "nama": "MUHAZIR HIDAYAT BIN (ALM) IRWAN",
    "perkara": "Pencurian",
    "kamar": "B / 61"
  },
  {
    "nama": "REZKY SYUHADA ALIAS KIKI BIN RIZALSYAH",
    "perkara": "Pencurian",
    "kamar": "B / 61"
  },
  {
    "nama": "MANFUR BIN ALM UMAR",
    "perkara": "Penipuan",
    "kamar": "A / 12"
  },
  {
    "nama": "HENDRI SYAHPUTRA BIN ZAKARIA ILYAS",
    "perkara": "Pencurian",
    "kamar": "A / 13"
  },
  {
    "nama": "REZEKI KHALUD SUDIRSAH BIN SUDIRMAN",
    "perkara": "Narkotika",
    "kamar": "B / 65"
  },
  {
    "nama": "ARIF MAULIANA BIN ALM ABDULLAH",
    "perkara": "Pencurian",
    "kamar": "A / 17"
  },
  {
    "nama": "ROBI SAPUTRA BIN (ALM) M YUSUF TM",
    "perkara": "Penipuan",
    "kamar": "A / 21"
  },
  {
    "nama": "MUKTAR HASAN BIN HASAN",
    "perkara": "Penggelapan",
    "kamar": "A / 22"
  },
  {
    "nama": "MUHAMMAD FADHIL BIN MAHDI S",
    "perkara": "Narkotika",
    "kamar": "B / 63"
  },
  {
    "nama": "MIFTAHUR RIZKI BIN DONI RAMADHA",
    "perkara": "Narkotika",
    "kamar": "A / 17"
  },
  {
    "nama": "M RIZZAL BIN ZULKIFLI",
    "perkara": "Narkotika",
    "kamar": "A / 15"
  },
  {
    "nama": "M DAUD BIN ABDULLAH",
    "perkara": "Narkotika",
    "kamar": "A / 13"
  },
  {
    "nama": "MUHAMMAD RISKI ALIAS RISKI BIN ALM RIDWAN LUBIS",
    "perkara": "Pencurian",
    "kamar": "A / 14"
  },
  {
    "nama": "RIAN SYAHRONI BIN SYADIMAN",
    "perkara": "Pencurian",
    "kamar": "A / 20"
  },
  {
    "nama": "SYIFAK MUHAMMAD YUS MHSC BIN MUHAMMAD YUS",
    "perkara": "Korupsi",
    "kamar": "B / 46"
  },
  {
    "nama": "ASKA ASKIAN BIN NASRUL",
    "perkara": "Penganiayaan",
    "kamar": "A / 22"
  },
  {
    "nama": "FAHRUL RAZI BIN ZAINAL ABIDIN",
    "perkara": "Narkotika",
    "kamar": "A / 17"
  },
  {
    "nama": "YUSNAIDI BIN DIRSUN",
    "perkara": "Narkotika",
    "kamar": "A / 26"
  },
  {
    "nama": "IRFANSYAH BIN BAMBANG RAHMAN",
    "perkara": "Narkotika",
    "kamar": "A / 25"
  },
  {
    "nama": "FETJARIAL BIN JARIMIN",
    "perkara": "Narkotika",
    "kamar": "A / 19"
  },
  {
    "nama": "REZAL FAHLEVI BIN MUSNADI",
    "perkara": "Narkotika",
    "kamar": "B / 59"
  },
  {
    "nama": "ALBAKRI ALIAS ALBA BIN JABUDDIN SELIAN (ALM)",
    "perkara": "Korupsi",
    "kamar": "A / 29"
  },
  {
    "nama": "M. NASIR BIN HASBI",
    "perkara": "Narkotika",
    "kamar": "B / 52"
  },
  {
    "nama": "FIRMANSYAH BIN ALM. MURDANI AZIZ",
    "perkara": "Pencurian",
    "kamar": "A / 14"
  },
  {
    "nama": "M AKBAL BIN ALM ISMAIL",
    "perkara": "Narkotika",
    "kamar": "A / 25"
  },
  {
    "nama": "GUNAWAR BIN JAKFAR",
    "perkara": "Pencurian",
    "kamar": "C / 68"
  },
  {
    "nama": "MAHADIE BIN ALM. ANWAR DAUD",
    "perkara": "Pencurian",
    "kamar": "A / 12"
  },
  {
    "nama": "FANNY AGUS YULIANTO BIN ALM SUPARJO",
    "perkara": "Pencurian",
    "kamar": "A / 15"
  },
  {
    "nama": "MUKHSIN, S.UD.,M,SI. BIN ALM MUHAMMAD JAM",
    "perkara": "Narkotika",
    "kamar": "MAPENALING / 10"
  },
  {
    "nama": "KIKI SYAHPUTRA BIN ALM SUNTORO",
    "perkara": "Narkotika",
    "kamar": "MAPENALING / 10"
  },
  {
    "nama": "TEGAR AULIA AKBAR BIN MARZUKI",
    "perkara": "Narkotika",
    "kamar": "MAPENALING / 10"
  },
  {
    "nama": "HAMIDI BIN RAHMAD",
    "perkara": "Korupsi",
    "kamar": "A / 12"
  },
  {
    "nama": "HERLIN, S.H., M.H BIN HAMDANI",
    "perkara": "Korupsi",
    "kamar": "B / 46"
  },
  {
    "nama": "MURSALIN, S.SOS BIN ALM ABDULLAH",
    "perkara": "Korupsi",
    "kamar": "B / 46"
  },
  {
    "nama": "MUSLIM IBRAHIM BIN ALM IBRAHIM",
    "perkara": "Korupsi",
    "kamar": "B / 46"
  },
  {
    "nama": "IRFANZI BIN ZULKIFLI M. JALAL",
    "perkara": "Pencurian",
    "kamar": "A / 20"
  },
  {
    "nama": "SYAHRUL RAMAZAN BIN M. DAUD",
    "perkara": "Pornografi",
    "kamar": "A / 13"
  },
  {
    "nama": "MUHAMMAD ADILIYANSYAH BIN DASRIL LATIF",
    "perkara": "Pencurian",
    "kamar": "A / 14"
  },
  {
    "nama": "DASWARMI BIN ABDUL WAHAB",
    "perkara": "Korupsi",
    "kamar": "A / 19"
  },
  {
    "nama": "ASRI BHR BIN ALM BAHARUDDIN",
    "perkara": "Korupsi",
    "kamar": "A / 19"
  },
  {
    "nama": "TEUKU RISKY AULIA,S.H BIN ALM TEUKU AZWAR",
    "perkara": "Peraturan Daerah",
    "kamar": "A / 30"
  },
  {
    "nama": "IRHAMNI BIN ALM. ABDULLAH RAHMAN",
    "perkara": "Pelanggaran Lalu Lintas",
    "kamar": "A / 24"
  },
  {
    "nama": "YUDIANSYAH JAMAL BIN JAMALUDDIN",
    "perkara": "Narkotika",
    "kamar": "A / 17"
  },
  {
    "nama": "SANDI MAULANA BIN ZULKIFLI",
    "perkara": "Narkotika",
    "kamar": "A / 13"
  },
  {
    "nama": "RAFIANDI BIN MARWAN",
    "perkara": "Narkotika",
    "kamar": "A / 13"
  },
  {
    "nama": "ABD RAHMAN PANJAITAN BIN AWALUDDIN",
    "perkara": "Narkotika",
    "kamar": "A / 20"
  },
  {
    "nama": "JEFRI BIN DAHLAN MAJID",
    "perkara": "Narkotika",
    "kamar": "A / 13"
  },
  {
    "nama": "WAWAN IRWANDA BIN MUCHSIN",
    "perkara": "Narkotika",
    "kamar": "A / 15"
  },
  {
    "nama": "GILANG PERMANA BIN (ALM) SOFYAN ADAM",
    "perkara": "Narkotika",
    "kamar": "A / 17"
  },
  {
    "nama": "ZULKARNAEN BIN M NUR",
    "perkara": "Narkotika",
    "kamar": "A / 21"
  },
  {
    "nama": "RADJA HIDAYATULLAH BIN HUSNI",
    "perkara": "Narkotika",
    "kamar": "A / 15"
  },
  {
    "nama": "SURYA ANDHIKA BIN WASMADI",
    "perkara": "Narkotika",
    "kamar": "A / 21"
  },
  {
    "nama": "JUNAIDI BIN ANWAR HASAN",
    "perkara": "Narkotika",
    "kamar": "A / 12"
  },
  {
    "nama": "SAIFUL BAHRI BIN (ALM) SYAHKUBAT",
    "perkara": "Narkotika",
    "kamar": "A / 14"
  },
  {
    "nama": "ARIF ARFA PUTRA BIN EKA SYAHPUTRA",
    "perkara": "Pencurian",
    "kamar": "A / 18"
  },
  {
    "nama": "HAVAZ BIN WAHIDIN",
    "perkara": "Kekerasan dalam Rumah Tangga",
    "kamar": "A / 14"
  },
  {
    "nama": "RAHMAN SYAHPUTRA BIN (ALM) ZAINAL ARIFIN",
    "perkara": "Pencurian",
    "kamar": "A / 13"
  },
  {
    "nama": "RIZKI BIN M. NUR",
    "perkara": "Peraturan Daerah",
    "kamar": "A / 14"
  },
  {
    "nama": "AHMAD KHAIRUL SAFRIL BIN H. RAZALI BUDIMAN (ALM)",
    "perkara": "Pencurian",
    "kamar": "A / 23"
  },
  {
    "nama": "IR DARWILIS BIN TGK. ILYAS",
    "perkara": "Korupsi",
    "kamar": "A / 28"
  },
  {
    "nama": "T. ARI GUNAWAN BIN T. SYARIF HAMDANI",
    "perkara": "Korupsi",
    "kamar": "A / 32"
  },
  {
    "nama": "DEDI SUKANDAR BIN (ALM) ISKANDAR",
    "perkara": "Peraturan Daerah",
    "kamar": "A / 17"
  },
  {
    "nama": "MUHAMMAD ADIL BIN FITRIADI",
    "perkara": "Peraturan Daerah",
    "kamar": "A / 22"
  },
  {
    "nama": "ZULBAHRI BIN NURDIN",
    "perkara": "Narkotika",
    "kamar": "A / 23"
  },
  {
    "nama": "IRHAM HELMI BIN (ALM) HELMI NURUDDIN",
    "perkara": "Pencurian",
    "kamar": "A / 14"
  },
  {
    "nama": "IGOSLI ANANDA BIN RAMLAN",
    "perkara": "Peraturan Daerah",
    "kamar": "A / 15"
  },
  {
    "nama": "FAHRIZAL BIN (ALM) M. TASMAN",
    "perkara": "Peraturan Daerah",
    "kamar": "A / 12"
  },
  {
    "nama": "EFENDI BIN HASBI ABDULLAH",
    "perkara": "Pencurian",
    "kamar": "A / 15"
  },
  {
    "nama": "REZA HIDAYAT SYAH,S.IP.MPA BIN -",
    "perkara": "Korupsi",
    "kamar": "A / 32"
  },
  {
    "nama": "DR. SYARIDIN, S.PD., M.PD BIN ABDULLAH (ALM)",
    "perkara": "Korupsi",
    "kamar": "B / 39"
  },
  {
    "nama": "RAJES SAPRIANSYAH PUTRA BIN (ALM) DJAMALUDIN",
    "perkara": "Penipuan",
    "kamar": "A / 25"
  },
  {
    "nama": "DR. CHALILI PUTRA,M.KES BIN -",
    "perkara": "Korupsi",
    "kamar": "A / 28"
  },
  {
    "nama": "TARMIZI BIN ALM. RAZALI",
    "perkara": "Pencurian",
    "kamar": "A / 26"
  },
  {
    "nama": "ERFIKA BIN JAILANI",
    "perkara": "Narkotika",
    "kamar": "A / 26"
  },
  {
    "nama": "DEDI SAPUTRA BIN ANAK DARI MUSLIM (ALM)",
    "perkara": "Informasi dan Transaksi Elektronik",
    "kamar": "MAPENALING / 11"
  },
  {
    "nama": "GUSWANTO BIN AWAN SENTOSA",
    "perkara": "Pencurian",
    "kamar": "A / 22"
  },
  {
    "nama": "MUHAMMAD BASYIR BIN SUSIADI",
    "perkara": "Pencurian",
    "kamar": "A / 12"
  },
  {
    "nama": "RAHMAT DANI BIN (ALM) HASAN",
    "perkara": "Pencurian",
    "kamar": "A / 26"
  },
  {
    "nama": "T M ABRAR AZIZI BAKTI BIN RUSLIZAR T A",
    "perkara": "Pencurian",
    "kamar": "A / 13"
  },
  {
    "nama": "MUSTAQIM BIN ANWAR ISMAIL",
    "perkara": "Peraturan Daerah",
    "kamar": "A / 14"
  },
  {
    "nama": "KURNIA BIN HASBALAH",
    "perkara": "Pencurian",
    "kamar": "A / 22"
  },
  {
    "nama": "FAISAL AMIR BIN RUSLI ABU BAKAR",
    "perkara": "Pencurian",
    "kamar": "A / 23"
  },
  {
    "nama": "AFIFUDDIN BIN BAHTIAR",
    "perkara": "Pencurian",
    "kamar": "A / 24"
  },
  {
    "nama": "M. HAIKAL BIN ZAMRIADI",
    "perkara": "Pencurian",
    "kamar": "A / 12"
  },
  {
    "nama": "TARMIZI SAFARI BIN SAFARI BASYAH",
    "perkara": "Memeras / Mengancam",
    "kamar": "A / 25"
  },
  {
    "nama": "SUPRIADI BIN (ALM) ANWAR",
    "perkara": "Narkotika",
    "kamar": "A / 25"
  },
  {
    "nama": "RISKI MUNANDAR BIN (ALM) HASAN",
    "perkara": "Pencurian",
    "kamar": "A / 15"
  },
  {
    "nama": "ERLANGGA BIN PAIMUN",
    "perkara": "Pencurian",
    "kamar": "A / 17"
  },
  {
    "nama": "SAIFULLAH BIN (ALM) USMAN",
    "perkara": "Pencurian",
    "kamar": "MAPENALING / 7"
  },
  {
    "nama": "SUHATA BIN M. THOMAS TANJUNG",
    "perkara": "Pencurian",
    "kamar": "A / 24"
  },
  {
    "nama": "FAHMI RIZA, S.H BIN (ALM) SOFYAN",
    "perkara": "Peraturan Daerah",
    "kamar": "MAPENALING / 11"
  },
  {
    "nama": "MUAZZIN ZULIAN BIN ZULKIFILI PUTEH",
    "perkara": "Narkotika",
    "kamar": "A / 12"
  },
  {
    "nama": "WIEN AUFA BIN HAMDAN",
    "perkara": "Kekerasan terhadap Wanita & Anak",
    "kamar": "A / 33"
  },
  {
    "nama": "AFRIZAL BIN (ALM) RUSLI",
    "perkara": "Narkotika",
    "kamar": "A / 23"
  },
  {
    "nama": "EVANI BIN RUSLI",
    "perkara": "Narkotika",
    "kamar": "A / 19"
  },
  {
    "nama": "PUTRA RAMADHAN BIN DAHLAN AHMAD",
    "perkara": "Peraturan Daerah",
    "kamar": "A / 12"
  },
  {
    "nama": "MARIO NALDI BIN NARWANSYAH",
    "perkara": "Narkotika",
    "kamar": "A / 15"
  },
  {
    "nama": "DEMMY ADYTIA BIN BACHTIAR MUSA",
    "perkara": "Narkotika",
    "kamar": "A / 15"
  },
  {
    "nama": "MI'RAJ BIN M YAKOB SABI",
    "perkara": "Penganiayaan",
    "kamar": "A / 15"
  },
  {
    "nama": "AGIEL SAPUTRA BIN MUHAMMAD KASIM",
    "perkara": "Narkotika",
    "kamar": "A / 13"
  },
  {
    "nama": "M. RONI BIN M. NASIR",
    "perkara": "Narkotika",
    "kamar": "A / 14"
  },
  {
    "nama": "MUHAMMAD RIVAY BIN AMIRUDDIN",
    "perkara": "Narkotika",
    "kamar": "A / 13"
  },
  {
    "nama": "M. GOZI ALWAFI BIN ZULKARNAEN",
    "perkara": "Narkotika",
    "kamar": "A / 13"
  },
  {
    "nama": "IRWAN SYAHPUTRA BIN SUDASONO S",
    "perkara": "Narkotika",
    "kamar": "A / 12"
  },
  {
    "nama": "FAKHRUL FUAD HASAN BIN AHMAD",
    "perkara": "Narkotika",
    "kamar": "A / 14"
  },
  {
    "nama": "HERI SYAHPUTRA BIN AMIR HAMZAH",
    "perkara": "Narkotika",
    "kamar": "A / 19"
  },
  {
    "nama": "M. RIZKI MUKHALVI BIN MUKLISSUDDIN",
    "perkara": "Narkotika",
    "kamar": "A / 20"
  },
  {
    "nama": "M. ARIFNUR BIN MINO",
    "perkara": "Narkotika",
    "kamar": "A / 20"
  },
  {
    "nama": "YUNI FAHRIZAL BIN ISMAIL LISMA",
    "perkara": "Narkotika",
    "kamar": "A / 21"
  },
  {
    "nama": "RISNANDAR, S.T BIN NURDIN",
    "perkara": "Korupsi",
    "kamar": "A / 35"
  },
  {
    "nama": "ZULFIKRI BIN KHAIRUNNAS",
    "perkara": "Narkotika",
    "kamar": "A / 18"
  },
  {
    "nama": "RAJUL FUADI BIN (ALM) ABDULRAHMAN",
    "perkara": "Narkotika",
    "kamar": "A / 14"
  },
  {
    "nama": "AL FAJRUL BIN MARWAN",
    "perkara": "Narkotika",
    "kamar": "A / 26"
  },
  {
    "nama": "ARIF ANANDA BIN NURDIN",
    "perkara": "Narkotika",
    "kamar": "A / 21"
  },
  {
    "nama": "MUNTASIR BIN M. DAUD KAOY",
    "perkara": "Narkotika",
    "kamar": "A / 27"
  },
  {
    "nama": "MURDANI BIN ALM. MUHAMMAD JAMIL",
    "perkara": "Peraturan Daerah",
    "kamar": "A / 27"
  },
  {
    "nama": "MURSALIN BIN (ALM) M. LIZAN",
    "perkara": "Peraturan Daerah",
    "kamar": "A / 27"
  },
  {
    "nama": "MUHAMMAD RAZI BIN RIDWAN",
    "perkara": "Narkotika",
    "kamar": "A / 27"
  },
  {
    "nama": "RIDWAN BIN HAMDAN",
    "perkara": "Peraturan Daerah",
    "kamar": "MAPENALING / 11"
  },
  {
    "nama": "MUHAMMAD NEZZA ARDANA BIN ZAMZAMI",
    "perkara": "Penganiayaan",
    "kamar": " / "
  },
  {
    "nama": "MUHAMMAD ZAKIR BIN SAYUTI",
    "perkara": "Peraturan Daerah",
    "kamar": " / "
  },
  {
    "nama": "SAHBUDDIN BIN M. SARIB",
    "perkara": "Korupsi",
    "kamar": "A / 21"
  },
  {
    "nama": "RAHMAT AKBAR BIN MAKMUR",
    "perkara": "Korupsi",
    "kamar": "A / 16"
  },
]

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxNR8AO5bPKNmYIgsv3k5YcYGWmZdBNC5g2KqVdVbWwDT_236vUQwAls_0DTAE9ee-umQ/exec";

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

    const perkaraInput = document.getElementById("perkara");
    const kamarInput = document.getElementById("kamar");

    if (perkaraInput) {
      perkaraInput.value = item.dataset.perkara || "";
      perkaraInput.closest(".wbp-info-card")?.classList.add("flash");
    }

    if (kamarInput) {
      kamarInput.value = item.dataset.kamar || "";
      kamarInput.closest(".wbp-info-card")?.classList.add("flash");
    }

    suggestBox.classList.add("hidden");
    suggestBox.innerHTML = "";

    setTimeout(() => {
      perkaraInput?.closest(".wbp-info-card")?.classList.remove("flash");
      kamarInput?.closest(".wbp-info-card")?.classList.remove("flash");
    }, 700);

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
    .filter((item) => item.nama.toLowerCase().includes(q))
    .slice(0, 8);

  if (!results.length) {
    suggestBox.classList.add("hidden");
    suggestBox.innerHTML = "";
    return;
  }

  suggestBox.innerHTML = results
    .map(
  (item) => `
    <div class="wbp-item"
         data-name="${item.nama.replace(/"/g, "&quot;")}"
         data-perkara="${item.perkara.replace(/"/g, "&quot;")}"
         data-kamar="${item.kamar.replace(/"/g, "&quot;")}">

      <div class="wbp-item-name">${item.nama}</div>

      <div class="wbp-item-meta">
        <span class="wbp-item-tag">${item.perkara}</span>
        <span class="wbp-item-room">${item.kamar}</span>
      </div>
    </div>
  `
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
  const height = 1660;

  canvas.width = width;
  canvas.height = height;

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "#0b5cab";
  ctx.fillRect(0, 0, width, 210);

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 52px Arial";
  ctx.fillText("A-LINE", 60, 85);

  ctx.font = "28px Arial";
  ctx.fillText("Antrian Online Rutan Banda Aceh", 60, 135);

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
  ctx.fillText("A-LINE", 0, 0);
  ctx.restore();
  ctx.textAlign = "left";

  let y = 445;

  drawDownloadRow(ctx, "NIK", ticket.nik, y, width); y += 95;
drawDownloadRow(ctx, "Nama", ticket.nama, y, width); y += 95;
drawDownloadRow(ctx, "Jenis Kelamin", ticket.gender, y, width); y += 95;
drawDownloadRow(ctx, "Relasi", ticket.relasi, y, width); y += 95;
drawDownloadRow(ctx, "Nama WBP", ticket.wbp, y, width); y += 95;
drawDownloadRow(ctx, "Kamar / Blok", ticket.kamar, y, width); y += 110;

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
ctx.fillText("Berlaku Hingga", 500, y);

ctx.fillStyle = "#0f172a";
ctx.font = "bold 21px Arial";

ctx.fillText(printedAt, 145, y);
ctx.fillText(validUntil, 680, y);

y += 88;

ctx.fillStyle = "#64748b";
ctx.font = "24px Arial";
ctx.fillText("Pengikut", 60, y);

const boxY = y - 34;
const boxW = 190;
const gap = 16;
const startX = 430;

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

      ctx.drawImage(qrCanvas, (width - 350) / 2, 1205);

      ctx.fillStyle = "#64748b";
      ctx.font = "22px Arial";
      ctx.textAlign = "center";
      ctx.fillText(
        "Scan QR Code ini saat verifikasi kunjungan",
        width / 2,
        1580
      );

      ctx.font = "18px Arial";
      ctx.fillStyle = "#94a3b8";
      ctx.fillText(
        "Dokumen digital resmi • A-LINE",
        width / 2,
        1615
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

            <div class="ticket-top">
  <div class="ticket-brand">A-Line</div>
  <div class="ticket-sub">Antrian Online Rutan Banda Aceh</div>
</div>

<div class="ticket-status">PENDAFTARAN BERHASIL</div>
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
  <span>Kamar / Blok</span>
  <strong>${data.kamar || "-"}</strong>
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
              Scan QR Code ini saat Verifikasi Kunjungan
            </div>

            <div class="ticket-footer">
              Dokumen digital resmi • A-LINE
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
    perkara: getValue("perkara"),
    kamar: getValue("kamar"), 

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

  function startQueueCountdown() {

  const el = document.getElementById("queue-countdown");
  const box = document.querySelector(".queue-countdown");
  const label = document.getElementById("queue-label");

  if (!el || !box) return;

  function formatTime(ms) {

    const totalSeconds = Math.floor(ms / 1000);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return (
      String(hours).padStart(2, "0") + " Jam : " +
      String(minutes).padStart(2, "0") + " Menit : " +
      String(seconds).padStart(2, "0") + " Detik"
    );
  }

  function tick() {

    const now = new Date();

    // WIB
    const wib = new Date(
      now.toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
      })
    );

    const day = wib.getDay(); // 0 = Minggu

    // Minggu otomatis tutup
    if (day === 0) {

      el.textContent = "LAYANAN TUTUP";

      box.classList.add("urgent");

      if (label) {
        label.textContent =
          "Hari Minggu Tidak Melayani Kunjungan";
      }

      return;
    }

    const currentMinutes =
      (wib.getHours() * 60) + wib.getMinutes();

    const jam0800 = 8 * 60;
    const jam0900 = 9 * 60;
    const jam1130 = (11 * 60) + 30;
    const jam1200 = 12 * 60;

    // =========================
    // 08:00 - 09:00
    // COUNTDOWN MENUJU BUKA
    // =========================
    if (
      currentMinutes >= jam0800 &&
      currentMinutes < jam0900
    ) {

      const target = new Date(wib);
      target.setHours(9, 0, 0, 0);

      const diff = target - wib;

      el.textContent = formatTime(diff);
       
       // mode kuning / bersiap
      box.classList.remove("urgent");
      box.classList.add("prepare");

      if (label) {
        label.textContent =
          "Layanan Kunjungan Akan Segera Dibuka Dalam :";
      }

      return;
    }

    // =========================
    // 09:00 - 11:30
    // SISA WAKTU KUNJUNGAN
    // =========================
    if (
      currentMinutes >= jam0900 &&
      currentMinutes < jam1130
    ) {

      const target = new Date(wib);
      target.setHours(11, 30, 0, 0);

      const diff = target - wib;

      el.textContent = formatTime(diff);

      // 30 menit terakhir = urgent
      if (diff <= 30 * 60 * 1000) {

        box.classList.add("urgent");

        if (label) {
          label.textContent =
            "Segera Datang, Waktu Kunjungan Hampir Berakhir";
        }

      } else {

        box.classList.remove("urgent");

        if (label) {
          label.textContent =
            "Sisa Waktu Kunjungan Hari Ini";
        }
      }

      return;
    }

    // =========================
    // 11:30 - 12:00
    // PENITIPAN BARANG
    // =========================
    if (
      currentMinutes >= jam1130 &&
      currentMinutes < jam1200
    ) {

      const target = new Date(wib);
      target.setHours(12, 0, 0, 0);

      const diff = target - wib;

      el.textContent = formatTime(diff);

      box.classList.add("urgent");

      if (label) {
        label.textContent =
          "Hanya Melayani Penitipan Barang";
      }

      return;
    }

    // =========================
    // 12:00 - 08:00
    // TUTUP
    // =========================
    el.textContent = "LAYANAN KUNJUNGAN TUTUP";

    box.classList.add("urgent");

    if (label) {
      label.textContent =
        "Pendaftaran Layanan Kunjungan Belum Dibuka";
    }
  }

  tick();

  setInterval(tick, 1000);
}

function speakSuccess() {

  const text =
    "Assalamualaikum! Selamat datang di Antrian Online Rutan Banda Aceh.";

  const msg = new SpeechSynthesisUtterance(text);

  msg.lang = "id-ID";
  msg.rate = 1.1;
  msg.pitch = 1;
  msg.volume = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(msg);
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
    badge.textContent = "Buka";
    badge.classList.remove("closed");
  } else {
    badge.textContent = "Tutup";
    badge.classList.add("closed");
  }
}

/* =========================
   LOADING
========================= */
window.addEventListener("DOMContentLoaded", () => {
  
  
  startQueueCountdown();
  const loadingScreen = document.getElementById("loading-screen");
  const app = document.getElementById("app");
  const enterBtn = document.getElementById("enter-dashboard-btn");

  // tampilkan app di belakang welcome screen
  app.classList.remove("hidden");

  // pastikan tombol ditemukan
  if (enterBtn) {

    enterBtn.addEventListener("click", function () {
      
      speakSuccess();

      // animasi fade out
      loadingScreen.style.opacity = "0";
      loadingScreen.style.pointerEvents = "none";

      setTimeout(() => {
        loadingScreen.style.display = "none";
      }, 400);

    });

  }

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
