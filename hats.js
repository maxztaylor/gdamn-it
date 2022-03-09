const hatPics = ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Akubra-style_hat.jpg/120px-Akubra-style_hat.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/DarkGreenAscotCapOnHead.jpg/120px-DarkGreenAscotCapOnHead.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Korean_hat-Ayam-01.jpg/120px-Korean_hat-Ayam-01.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/20070102_per_erik_strandberg_balaclava_1.jpg/120px-20070102_per_erik_strandberg_balaclava_1.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Balmoral_bonnet_black.jpg/120px-Balmoral_bonnet_black.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Katalanische_Barretina.jpg/120px-Katalanische_Barretina.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Texas_Tech_Red_Raiders_baseball_cap.jpg/120px-Texas_Tech_Red_Raiders_baseball_cap.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Skate-Beanie.jpg/120px-Skate-Beanie.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/1st_Sardinia_Grenadiers_Bastille_Day_2007_n1.jpg/120px-1st_Sardinia_Grenadiers_Bastille_Day_2007_n1.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Austria-GreenBeret.jpg/120px-Austria-GreenBeret.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Jimmy_Wales%2C_Closing_Ceremony_Wikimania_2015.JPG/120px-Jimmy_Wales%2C_Closing_Ceremony_Wikimania_2015.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Detail_from_a_painting_of_Napoleon.jpg/120px-Detail_from_a_painting_of_Napoleon.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Biret.JPG/120px-Biret.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Ngayogyakarta-style_blangkon%2C_2015-05-17_04.jpg/120px-Ngayogyakarta-style_blangkon%2C_2015-05-17_04.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/BoaterStrawHat_wb.jpg/120px-BoaterStrawHat_wb.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Tigerstripehat.JPG/120px-Tigerstripehat.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/1800s_Boss_of_the_plains_5.jpg/120px-1800s_Boss_of_the_plains_5.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/MaryPickfordPortrait.jpg/120px-MaryPickfordPortrait.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Bowler_Hat_sw_fcm.jpg/120px-Bowler_Hat_sw_fcm.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ronja_Addams-Moring_FI-EU_2007-Aug-11_by-RAM.jpg/120px-Ronja_Addams-Moring_FI-EU_2007-Aug-11_by-RAM.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Bucket_hat_line_drawing.svg/120px-Bucket_hat_line_drawing.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/8e_hussards_1804%28fr%29.jpg/120px-8e_hussards_1804%28fr%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/St_Helena_detail_Agnolo_Gaddi.jpg/120px-St_Helena_detail_Agnolo_Gaddi.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Mary_Bomar.jpg/120px-Mary_Bomar.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Not_what_you_may_think_-_these_are_nazarenos_%28hooded_penitents%29_in_the_Holy_Week_parade_in_Granada_%28IMG_5519a%29.jpg/120px-Not_what_you_may_think_-_these_are_nazarenos_%28hooded_penitents%29_in_the_Holy_Week_parade_in_Granada_%28IMG_5519a%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/PilgrimsHat.jpg/120px-PilgrimsHat.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/CappelloRomano.JPG/120px-CappelloRomano.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/FashionableFannyBrice.jpg/120px-FashionableFannyBrice.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Jean-Claude_Lebaube.jpg/120px-Jean-Claude_Lebaube.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Caubeen.png/120px-Caubeen.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Korea-Min_Sangho-1898-Hubert_Vos.jpg/120px-Korea-Min_Sangho-1898-Hubert_Vos.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Gorro_chilote.JPG/120px-Gorro_chilote.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Greenmustardorangbluechullo.jpg/120px-Greenmustardorangbluechullo.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Chupallas_Chile.jpg/120px-Chupallas_Chile.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Vilmabanky.jpg/120px-Vilmabanky.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Conical_hat.jpg/120px-Conical_hat.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cap_of_American_opossum_with_a_raccoon_tail_%28Davy_Crockett_style%29.jpg/120px-Cap_of_American_opossum_with_a_raccoon_tail_%28Davy_Crockett_style%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/SidBarnesHeadshot.jpg/120px-SidBarnesHeadshot.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Hampshire_helmet_constable.jpg/120px-Hampshire_helmet_constable.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/YellowHardHat.jpg/120px-YellowHardHat.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Nepali_dress_boy.jpg/120px-Nepali_dress_boy.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/US_Navy_080923-N-4965F-009_Navy_Region_Hawaii_Ceremonial_Guard_forms_up_in_preparation_of_a_burial.jpg/120px-US_Navy_080923-N-4965F-009_Navy_Region_Hawaii_Ceremonial_Guard_forms_up_in_preparation_of_a_burial.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/1910_Amelia_Bingham_cropped.jpg/120px-1910_Amelia_Bingham_cropped.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Dunce_cap_from_LOC_3c04163u.png/120px-Dunce_cap_from_LOC_3c04163u.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Chloe_Moo_of_Darwin_-_2013_Myer_Fashions_on_the_Field_%2810705418974%29.jpg/120px-Chloe_Moo_of_Darwin_-_2013_Myer_Fashions_on_the_Field_%2810705418974%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/A_fedora_hat%2C_made_by_Borsalino.jpg/120px-A_fedora_hat%2C_made_by_Borsalino.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Fez.jpg/120px-Fez.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Flat-cap.jpg/120px-Flat-cap.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Gandhi_cap.jpg/120px-Gandhi_cap.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Omar-n-bradley-contrast-adjusted.jpg/120px-Omar-n-bradley-contrast-adjusted.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Korea-gat-01.jpg/120px-Korea-gat-01.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Gatsbycapsmall.jpg/120px-Gatsbycapsmall.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/YoungMon.jpg/120px-YoungMon.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Prince_Sultan.jpg/120px-Prince_Sultan.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/5_SCOTS_Soldier_with_Bayonet_Fixed_on_Parade_in_Dumbarton%2C_Scotland_MOD_45152907.jpg/120px-5_SCOTS_Soldier_with_Bayonet_Fixed_on_Parade_in_Dumbarton%2C_Scotland_MOD_45152907.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Visorlayout.jpg/120px-Visorlayout.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Audrey_Hepburn_Roman_Holiday_cropped.jpg/120px-Audrey_Hepburn_Roman_Holiday_cropped.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/StateLibQld_1_126531_Margery_Foll_and_Mrs_Foll_%28wife_of_Senator_Foll%29_at_Doomben_Racecourse%2C_Brisbane%2C_1940_cropped.jpg/120px-StateLibQld_1_126531_Margery_Foll_and_Mrs_Foll_%28wife_of_Senator_Foll%29_at_Doomben_Racecourse%2C_Brisbane%2C_1940_cropped.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Schutzhelm.jpg/120px-Schutzhelm.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Infantry_Hardee.jpg/120px-Infantry_Hardee.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Hans_Holbein_Temple_Detail.jpg/120px-Hans_Holbein_Temple_Detail.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Robert_Ewing_1914.jpg/120px-Robert_Ewing_1914.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Skotthufa.jpg/120px-Skotthufa.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Jaapi.jpg/120px-Jaapi.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Wassilij_Wassiljewitsch_Wereschtschagin_001.jpg/120px-Wassilij_Wassiljewitsch_Wereschtschagin_001.jpg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Jinnahsideposecap_.jpg/120px-Jinnahsideposecap_.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/K%C3%A9pi_gendarmerie_pontificale.jpg/120px-K%C3%A9pi_gendarmerie_pontificale.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Kippa.jpg/120px-Kippa.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Kofia.JPG/120px-Kofia.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Mirza_Kochak_Khan.jpg/120px-Mirza_Kochak_Khan.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Rabbi_Moshe_Leib_Rabinovich.JPG/120px-Rabbi_Moshe_Leib_Rabinovich.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/PikiWiki_Israel_3243_Ein_Hahoresh.jpg/120px-PikiWiki_Israel_3243_Ein_Hahoresh.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Umaru_Yar%27Adua_VOA.jpg/120px-Umaru_Yar%27Adua_VOA.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/COLLECTIE_TROPENMUSEUM_Mannenhoofddeksel_TMnr_2381-64.jpg/120px-COLLECTIE_TROPENMUSEUM_Mannenhoofddeksel_TMnr_2381-64.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Farmer_%289234094254%29.jpg/212px-Farmer_%289234094254%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Visita_di_Papa_Benedetto_XVI_a_Genova_-_2008-05-18_-_Primo_piano_di_Benedetto_XVI.jpg/120px-Visita_di_Papa_Benedetto_XVI_a_Genova_-_2008-05-18_-_Primo_piano_di_Benedetto_XVI.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Enrique_ponce.jpg/120px-Enrique_ponce.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinusPaulingGraduation1922.jpg/120px-LinusPaulingGraduation1922.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flickr_-_Government_Press_Office_%28GPO%29_-_Gottex_Bathing_Suits.jpg/120px-Flickr_-_Government_Press_Office_%28GPO%29_-_Gottex_Bathing_Suits.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Pakol_-_textiles_and_clothing_-_Fatima_Zehra_Girls_School_-_Kandahar_-_Afghanistan_-_10-24-2008.jpg/120px-Pakol_-_textiles_and_clothing_-_Fatima_Zehra_Girls_School_-_Kandahar_-_Afghanistan_-_10-24-2008.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Panama_hat.jpg/120px-Panama_hat.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Sunni_Muslim_man_wearing_traditional_dress_and_headgear_alt1.jpg/120px-Sunni_Muslim_man_wearing_traditional_dress_and_headgear_alt1.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Partyhat.JPG/120px-Partyhat.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/M1951_Ridgeway_Field_Cap.gif/120px-M1951_Ridgeway_Field_Cap.gif",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Jean_Lenox_001.jpg/120px-Jean_Lenox_001.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Nathan_Twining_02.jpg/120px-Nathan_Twining_02.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bust_Attis_CdM.jpg/120px-Bust_Attis_CdM.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/1890_Gaiety_Girls.jpg/120px-1890_Gaiety_Girls.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Saint_Jacques.JPG/120px-Saint_Jacques.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/DorisDay-midnightlace.jpg/120px-DorisDay-midnightlace.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/PithHelmetTruman.jpg/120px-PithHelmetTruman.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Planter%27sHat.jpg/120px-Planter%27sHat.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Porkpie.jpg/120px-Porkpie.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Kuq_e_zi_%28cropped%29.jpg/120px-Kuq_e_zi_%28cropped%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Rasta_Man_Barbados.jpg/120px-Rasta_Man_Barbados.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Rogatywka-polowa.JPG/120px-Rogatywka-polowa.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Russian_sailor_cap.jpg/120px-Russian_sailor_cap.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/DorothyCampbellPortrait1909.jpg/120px-DorothyCampbellPortrait1909.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Silver_enlaid_salakot.jpg/120px-Silver_enlaid_salakot.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Sami_hat.jpg/120px-Sami_hat.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Santa_Hat.jpg/120px-Santa_Hat.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/MuseeMarine-ShakoMarine.jpg/120px-MuseeMarine-ShakoMarine.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Judeu_ortodoxo_reza_com_um_shtreimel%2C_Kotel%2C_Jerusal%C3%A9m.jpg/120px-Judeu_ortodoxo_reza_com_um_shtreimel%2C_Kotel%2C_Jerusal%C3%A9m.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Australian_Army_ceremonial_slouch_hat.png/120px-Australian_Army_ceremonial_slouch_hat.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Harry_S_Truman_sombrero.jpg/120px-Harry_S_Truman_sombrero.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Sombrero-cordobes.jpg/120px-Sombrero-cordobes.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Soekarno.jpg/120px-Soekarno.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Georg_Michael_Schneider_098.jpg/120px-Georg_Michael_Schneider_098.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Felthat.jpg/120px-Felthat.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Ylioppilaslakki.jpg/120px-Ylioppilaslakki.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Young_Woman_in_Sun_Hat.jpg/120px-Young_Woman_in_Sun_Hat.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Tam-o-shanters.jpg/120px-Tam-o-shanters.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Taqiyah.jpg/120px-Taqiyah.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Tophat.jpg/120px-Tophat.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Chef_Hat.JPG/120px-Chef_Hat.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Peter_the_Great_Reenactor.jpg/120px-Peter_the_Great_Reenactor.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Rosenberg_-_Selfportrait.jpg/120px-Rosenberg_-_Selfportrait.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Truckerhat.jpg/120px-Truckerhat.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Tubeteika.JPG/120px-Tubeteika.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Black_Tudor_bonnet_with_a_claret_cord_and_tassel_from_Ede_and_Ravenscroft%2C_UK_-_20080408.jpg/120px-Black_Tudor_bonnet_with_a_claret_cord_and_tassel_from_Ede_and_Ravenscroft%2C_UK_-_20080408.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Yellowhat.jpg/120px-Yellowhat.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Sikh_wearing_turban.jpg/120px-Sikh_wearing_turban.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Tyrolean_hat_3.jpg/120px-Tyrolean_hat_3.jpg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Robert_W._Patten_%28The_Umbrella_Man%29.png/120px-Robert_W._Patten_%28The_Umbrella_Man%29.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Man_wearing_upe.jpg/120px-Man_wearing_upe.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Grayushanka.jpg/120px-Grayushanka.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Sombrero_vueltiao.jpg/120px-Sombrero_vueltiao.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/George_Lindsey_1970.JPG/120px-George_Lindsey_1970.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Wizard_and_his_Wishing_Well_on_Bourbon_Street%2C_New_Orleans%2C_Louisiana_LCCN2011632742_%28cropped%29.tif/lossy-page1-120px-Wizard_and_his_Wishing_Well_on_Bourbon_Street%2C_New_Orleans%2C_Louisiana_LCCN2011632742_%28cropped%29.tif.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Cardinal_zucchetto_2003_modified_2008-15-08.jpg/120px-Cardinal_zucchetto_2003_modified_2008-15-08.jpg"
];

const hatNames = ["Akubra",
    "Ascot cap",
    "Ayam",
    "Balaclava",
    "Balmoral bonnet",
    "Barretina",
    "Baseball cap",
    "Beanie",
    "Bearskin",
    "Beret",
    "Bhaad-gaaule topi",
    "Bicorne",
    "Biretta",
    "Blangkon",
    "Boater",
    "Boonie hat",
    "Boss of the Plains",
    "Boudoir cap",
    "Bowler / Derby",
    "Breton",
    "Bucket hat",
    "Busby",
    "Bycocket",
    "Campaign hat",
    "Capirote",
    "Capotain",
    "Cappello romano",
    "Cartwheel hat",
    "Casquette",
    "Caubeen",
    "Chengziguan",
    "Chilote cap",
    "Chullo",
    "Chupalla",
    "Cloche hat",
    "Conical Asian hat",
    "Coonskin cap",
    "Cricket cap",
    "Custodian helmet",
    "Deerstalker",
    "Dhaka topi",
    "Dixie cup hat",
    "Draped turban",
    "Dunce cap",
    "Fascinator",
    "Fedora",
    "Fez",
    "Flat cap",
    "Gandhi cap",
    "Garrison or Forage cap",
    "Gat",
    "Gatsby",
    "Gaung Paung",
    "Ghutrah",
    "Glengarry",
    "Green eyeshade",
    "Half hat",
    "Halo hat",
    "Hard hat",
    "Hardee hat",
    "Hennin",
    "Homburg",
    "Icelandic tail-cap",
    "Jaapi",
    "Kalpak",
    "Karakul (Qaraqul)",
    "Kepi",
    "Kippah or Yarmulke",
    "Kofia",
    "Kolah namadi",
    "Kolpik",
    "Kova tembel",
    "Kufi",
    "Kupiah",
    "Mathal",
    "Mitre",
    "Montera",
    "Mortarboard",
    "Mushroom hat",
    "Pakul",
    "Panama",
    "Papakhi",
    "Party hat",
    "Patrol cap",
    "Peach basket hat",
    "Peaked cap",
    "Phrygian cap",
    "Picture hat",
    "Pilgrim's hat",
    "Pillbox hat",
    "Pith helmet",
    "Planter's hat",
    "Porkpie",
    "Qeleshe",
    "Rastacap",
    "Rogatywka",
    "Sailor cap",
    "Sailor hat",
    "Salakot",
    "Sami hat",
    "Santa Hat",
    "Shako",
    "Shtreimel",
    "Slouch",
    "Sombrero",
    "Sombrero Cordobés",
    "Songkok",
    "Sou'wester",
    "Stetson",
    "Student cap",
    "Sun hat",
    "Tam o' Shanter",
    "Taqiyah",
    "Top hat",
    "Toque",
    "Tricorne",
    "Trilby",
    "Trucker hat",
    "Tubeteika",
    "Tudor bonnet",
    "Tuque",
    "Turban",
    "Tyrolean hat",
    "Umbrella hat",
    "Upe",
    "Ushanka",
    "Vueltiao",
    "Whoopee Cap",
    "Wizard/witch hat",
    "Zucchetto"];


let hatRandomNumber = Math.floor(Math.random() * hatPics.length);
let answerPic = hatPics[hatRandomNumber];
let hatAnswerName = hatNames[hatRandomNumber];
let hatAnswerNameClean = hatAnswerName.replace('\'', '').toLowerCase()

const hatPicDisp = document.querySelector(".hatPicDisp");
const hatPreviousGuesses = document.querySelector(".hatPreviousGuesses");
const hatGuesses = document.querySelector(".hatGuesses");
const hatLastResult = document.querySelector(".hatLastResult");
const hatGuessSubmit = document.querySelector(".hatGuessSubmit");
const hatGuessField = document.querySelector(".hatGuessField");
let hatGuessCount = 1;
let hatResetButton;
let hatGiveUpButton;

hatGuesses.style.whiteSpace = "pre";

const hatImg = document.createElement('img');
    hatImg.src = answerPic;
    hatPicDisp.appendChild(hatImg);

function hatCheckGuess() {
    const userGuess = hatGuessField.value;
    const userGuessClean = userGuess.replace('\'', '').toLowerCase()
    if (hatGuessCount == 1) {
        hatPreviousGuesses.textContent = 'Previous Guesses:';
    }

    if (userGuess.length > 0)
        hatGuesses.textContent = userGuess + '\n' + hatGuesses.textContent;

    if (userGuessClean == hatAnswerNameClean) {
        hatLastResult.textContent = hatAnswerName + ' is correct!';
        hatLastResult.style.color = 'green';
        hatSetGameOver();
    } else {
        hatLastResult.textContent = 'WRONG!';
        hatLastResult.style.color = 'red';
    }

    if (hatGuessCount == 1) {
        hatGiveUpButton = document.createElement('button');
        hatGiveUpButton.textContent = 'Give up';
        document.getElementById("hatGuessForm").appendChild(hatGiveUpButton);
        hatGiveUpButton.addEventListener('click', hatGiveUp);
    }

    hatGuessCount++;
    hatGuessField.value = '';
    hatGuessField.focus();

}

hatGuessSubmit.addEventListener('click', hatCheckGuess);

function hatSetGameOver() {
    hatGuessField.disabled = true;
    hatGuessSubmit.disabled = true;
    hatResetButton = document.createElement('button');
    hatResetButton.textContent = 'Start new game';
    document.getElementById("hatGuessForm").appendChild(hatResetButton);
    hatResetButton.addEventListener('click', resetGame);
}

function hatGiveUp() {
    hatSetGameOver();
    let giveUpArticle = 'a '
    if (hatAnswerName.match('^[aieouAIEOU].*')) {
        giveUpArticle = 'an '
    }
    hatGiveUpButton.parentNode.removeChild(hatGiveUpButton);
    hatLastResult.textContent = 'You gave up! How did you not know that was ' + giveUpArticle + hatAnswerName + '?'
}

function resetGame() {
    hatGuessCount = 1;
    const resetParas = document.querySelectorAll('.hatResultParas p');
    for (const resetPara of resetParas) {
        resetPara.textContent = '';
    }

    hatResetButton.parentNode.removeChild(hatResetButton);
    hatGuessField.disabled = false;
    hatGuessSubmit.disabled = false;
    hatGuessField.value = '';
    hatGuessField.focus();
    hatLastResult.style.color = 'black';
    hatRandomNumber = Math.floor(Math.random() * hatPics.length);
    answerPic = hatPics[hatRandomNumber];
    hatAnswerName = hatNames[hatRandomNumber];
    hatImg.src = answerPic;
}