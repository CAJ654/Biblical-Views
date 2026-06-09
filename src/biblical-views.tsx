import { useState } from "react";

const categories = [
  {
    id: "hell",
    icon: "🔥",
    title: "Hell, Purgatory & Eternal Destiny",
    question: "What awaits the dead — saved and unsaved — after death?",
    views: [
      {
        name: "Eternal Conscious Torment (ECT)",
        spectrum: 0,
        tags: ["Traditional", "Catholic", "Reformed", "Evangelical"],
        summary: "The unsaved experience conscious suffering in hell forever. Hell is a real place of unending punishment, separation from God, and torment — often understood as both spiritual and physical.",
        key_texts: ["Matt 25:46", "Rev 20:10", "Mark 9:43–48", "2 Thess 1:9"],
        proponents: "Augustine, Aquinas, Calvin, Jonathan Edwards, Wayne Grudem",
        notes: "The majority historic view. Often distinguished between 'separation' and 'torment' emphases within ECT itself."
      },
      {
        name: "The Divine Presence (River of Fire)",
        spectrum: 15,
        tags: ["Orthodox", "Historic", "Mystical"],
        summary: "Heaven and Hell are not two separate geographical locations, but two different subjective experiences of the exact same reality: the unmediated presence and infinite love of God. For those who love God, His presence is paradise; for those who have hardened their hearts against Him, His presence is an unescapable, tormenting fire. God inflicts no external torture; the suffering is entirely existential and self-inflicted.",
        key_texts: ["Heb 12:29", "Ps 139:8", "Luke 2:34", "Rom 12:20"],
        proponents: "Isaac the Syrian, John Damascene, Alexandre Kalomiros, Vladimir Lossky",
        notes: "The prevailing view in Eastern Orthodoxy. It rejects the Western concept of God as a judge who inflicts external punitive physical torment, emphasizing instead that 'our God is a consuming fire' and that hell is the painful experience of being loved by a God you hate."
      },
      {
        name: "Purgatory",
        spectrum: 20,
        tags: ["Catholic", "Some Anglican", "Some Orthodox"],
        summary: "Believers who die in God's grace but are not yet fully purified undergo a process of cleansing after death before entering heaven. Purgatory is not a second chance for the damned but a purging of the temporal punishment due to sins already forgiven. The living can aid the dead through prayer, masses, and indulgences.",
        key_texts: ["1 Cor 3:12–15", "2 Macc 12:46 (Deuterocanon)", "Matt 12:32", "Rev 21:27"],
        proponents: "Catholic Magisterium, Council of Trent, Council of Florence, Pope Benedict XVI (Spe Salvi)",
        notes: "Defined Catholic dogma. Eastern Orthodoxy affirms a similar intermediate state of purification — sometimes described through the controversial 'toll house' tradition — without systematizing it as Rome has. Most Protestants reject purgatory as unscriptural and as undermining the sufficiency of Christ's atonement. Luther's 95 Theses (1517) were a direct attack on the indulgence system built on purgatorial theology."
      },
      {
        name: "Post-Mortem Evangelism (Second Chance)",
        spectrum: 45,
        tags: ["Evangelical", "Inclusivist", "Modern"],
        summary: "Those who die without having a fair or explicit opportunity to hear and understand the Gospel of Jesus Christ in this life will be given a conscious opportunity to accept or reject Him in the intermediate state after death. Hell is reserved exclusively for those who explicitly and willfully reject Christ with full clarity, not those who died in ignorance.",
        key_texts: ["1 Pet 3:18–20", "1 Pet 4:6", "Phil 2:10–11", "Acts 17:30"],
        proponents: "Donald Bloesch, Gabriel Fackre, George MacDonald (in part)",
        notes: "Often criticized by traditionalists as undermining the urgency of earthly missionary work, but defended by proponents as the only way to reconcile God's universal desire for salvation (1 Tim 2:4) with the theological necessity of explicit faith in Christ (John 14:6)."
      },
      {
        name: "Immediate Annihilationism",
        spectrum: 55,
        tags: ["Conditionalist", "Evangelical", "Adventist"],
        summary: "At death (or at final judgment), the unsaved simply cease to exist — there is no period of conscious suffering beforehand. Destruction is instantaneous. Immortality is not inherent to human nature; only believers receive it as a gift in resurrection.",
        key_texts: ["Matt 10:28", "Rom 6:23", "Ps 37:9–10", "Mal 4:1–3"],
        proponents: "Seventh-day Adventists, some in the Rethinking Hell movement",
        notes: "Sometimes paired with 'soul sleep' — the view that the dead are unconscious until resurrection. The emphasis is that annihilation is not a drawn-out punishment but an immediate cessation."
      },
      {
        name: "Eventual Annihilationism (Terminal Punishment)",
        spectrum: 65,
        tags: ["Evangelical", "Conditionalist", "Growing"],
        summary: "The unsaved experience a real but finite period of conscious punishment after judgment, proportional to their deeds, before being destroyed entirely. Hell is not unending torment but ends in extinction. Sometimes called 'terminal punishment' or 'conditional immortality.'",
        key_texts: ["2 Pet 3:7", "Rev 20:14–15", "Matt 10:28", "2 Thess 1:9"],
        proponents: "Edward Fudge, John Stott (tentatively), Clark Pinnock, Glenn Peoples, Rethinking Hell movement",
        notes: "The more common academic annihilationist position. Allows that 'destruction' follows a real judgment with proportional consequences — it answers the fairness objection by allowing degrees of punishment before extinction."
      },
      {
        name: "Hopeful Universalism",
        spectrum: 85,
        tags: ["Catholic", "Mainline", "Nuanced"],
        summary: "We do not possess definitive, certain knowledge that any specific human being is currently in Hell, nor can we dogmatically assert that all will be saved. However, because scripture states God desires all people to be saved, Christians have a theological right—and a spiritual duty—to pray and reasonably hope that Christ's redemption will ultimately outwit human resistance, resulting in a completely empty Hell.",
        key_texts: ["1 Tim 2:4", "2 Pet 3:9", "John 12:32", "Rom 11:32"],
        proponents: "Hans Urs von Balthasar, Bishop Robert Barron, Karl Barth (arguably), Edith Stein",
        notes: "Famously articulated in Balthasar's landmark book 'Dare We Hope That All Men Be Saved?'. It carefully navigates the tension between Christ’s stark warnings of damnation (treated as real, catastrophic possibilities) and God's universal salvific will."
      },
      {
        name: "Universal Reconciliation (Universalism)",
        spectrum: 100,
        tags: ["Liberal", "Some Orthodox", "Christian Universalist"],
        summary: "All people will ultimately be saved and reconciled to God, either through postmortem repentance, purifying judgment, or God's irresistible love. Hell may be real but remedial and temporary.",
        key_texts: ["Col 1:20", "1 Tim 2:4", "Rom 5:18–19", "1 Cor 15:22"],
        proponents: "Origen, Gregory of Nyssa, George MacDonald, Thomas Talbott, Robin Parry (Ilaria Ramelli)",
        notes: "Ranges from 'hopeful universalism' (Bell) to dogmatic. Eastern Orthodoxy has a stronger universalist stream than Western Christianity."
      }
    ]
  },
  {
    id: "torah",
    icon: "📜",
    title: "Torah & the Law",
    question: "What is the believer's relationship to the Mosaic Law?",
    views: [
      {
        name: "Theonomy / Christian Reconstructionism",
        spectrum: 0,
        tags: ["Reformed", "Reconstructionist"],
        summary: "All three categories of Mosaic Law (moral, ceremonial, civil) remain binding unless explicitly repealed in the NT. Ceremonial laws are fulfilled typologically in Christ. The civil laws of Israel should ideally be implemented by nations today as God's just social order.",
        key_texts: ["Matt 5:17–19", "Deut 4:5–8", "Ps 119"],
        proponents: "R.J. Rushdoony, Greg Bahnsen, Gary North",
        notes: "A minority Reformed view. Distinguished from mere 'moral law' positions by insisting Israel's civil code is normative for civil government today."
      },
      {
        name: "Messianic / Torah-Observant",
        spectrum: 15,
        tags: ["Messianic Jewish", "Hebrew Roots"],
        summary: "The Torah remains God's instruction (torah = 'teaching') for all believers. Yeshua/Jesus did not abolish the Torah but clarified and embodied it. Gentile believers are grafted into Israel and called to observe Torah life — including Shabbat, dietary laws, and appointed times (moedim).",
        key_texts: ["Matt 5:17–19", "Rom 3:31", "Acts 21:20–24", "Eph 2:11–19"],
        proponents: "Daniel Lancaster (FFOZ), Tim Hegg, First Fruits of Zion",
        notes: "Distinct from legalism — Torah is walked out by Spirit-empowered believers, not as a basis for justification. Broad spectrum from 'Jew-only' obligations to universal observance."
      },
      {
        name: "Natural Law & The New Law",
        spectrum: 30,
        tags: ["Catholic", "Thomistic", "Patristic"],
        summary: "The Mosaic Law contains timeless moral precepts that are expressions of 'Natural Law' — the divine order written on every human heart and accessible via reason. Christ fulfilled the Old Law and instituted the 'New Law' or 'Law of the Gospel,' which is the grace of the Holy Spirit received through faith and operating via charity. The ceremonial and civil codes of Israel are entirely dead, replaced by the sacramental life and authoritative guidance of the Church Magisterium.",
        key_texts: ["Rom 2:14–15", "Matt 5:17", "John 13:34", "Gal 5:6"],
        proponents: "Thomas Aquinas, Augustine, Catholic Magisterium (CCC 1950–1986)",
        notes: "Differs from Reformed Covenant views by rooting the moral law in the cosmos/human reason (Natural Law) rather than an overarching federal covenant framework, and by placing the administration of the 'New Law' directly inside the Church's sacramental system."
      },
      {
        name: "Covenant Theology (3-Covenant)",
        spectrum: 40,
        tags: ["Reformed", "Presbyterian"],
        summary: "The Mosaic Law is part of the Covenant of Grace administration. The moral law (Ten Commandments) remains binding on all people. Ceremonial laws are fulfilled in Christ; civil laws are expired but their equity applies. Believers obey the law out of gratitude.",
        key_texts: ["Matt 5:17–19", "Rom 13:8–10", "WCF XIX"],
        proponents: "Calvin, Westminster Standards, Heidelberg Catechism, RC Sproul",
        notes: "Distinguishes moral/ceremonial/civil law tripartite division. The Sabbath commandment remains binding (usually transferred to Sunday)."
      },
      {
        name: "New Covenant Theology (NCT)",
        spectrum: 60,
        tags: ["Baptist", "Reformed Baptist"],
        summary: "The Mosaic Covenant has been entirely fulfilled and superseded by the New Covenant. Christians are not under any aspect of the Mosaic Law as a covenant. The moral standard comes through the 'law of Christ' mediated through the NT apostles.",
        key_texts: ["Heb 8:13", "Jer 31:31–34", "Gal 6:2", "1 Cor 9:21"],
        proponents: "Tom Wells, Fred Zaspel, John Reisinger",
        notes: "Rejects the moral/ceremonial/civil tripartite split. The Decalogue is not directly binding; nine of ten commandments are re-issued in the NT (Sabbath is not)."
      },
      {
        name: "Lutheran Law/Gospel Distinction",
        spectrum: 75,
        tags: ["Lutheran", "Two-Kingdom"],
        summary: "Law and Gospel are sharply distinguished. The law's primary role is to expose sin (usus elenchticus). Believers live under the Gospel, not the law, though the law still functions civilly and as a mirror. The Mosaic covenant is not binding on Christians.",
        key_texts: ["Gal 3:24–25", "Rom 3:20", "Rom 10:4"],
        proponents: "Luther, Melanchthon, C.F.W. Walther",
        notes: "Distinguishes 'third use of the law' (guide for believers) which Luther was ambivalent about; later Lutheranism affirms it."
      },
      {
        name: "Antinomianism",
        spectrum: 96,
        tags: ["Heretical", "Hyper-grace"],
        summary: "Believers are entirely free from the moral law as a rule of life. Grace eliminates any obligatory role of law — including the Ten Commandments — for the Christian. Sanctification is purely Spirit-led with no legal framework.",
        key_texts: ["Rom 6:14", "Gal 5:18"],
        proponents: "Johannes Agricola (historical), some hyper-grace teachers",
        notes: "Condemned at the Council of Trent and by Luther. Most mainstream positions affirm law's role in conviction and sanctification even while rejecting it as a basis for justification."
      }
    ]
  },
  {
    id: "rapture",
    icon: "☁️",
    title: "Rapture & Tribulation",
    question: "When does the church leave, and what is the Tribulation?",
    views: [
      {
        name: "Pre-Tribulation Rapture",
        spectrum: 0,
        tags: ["Dispensational", "Evangelical", "Popular"],
        summary: "The church is raptured before the 7-year Tribulation begins. The church is entirely absent from earth during Daniel's 70th week. The Tribulation is primarily about Israel's purification and God's wrath on unbelievers.",
        key_texts: ["1 Thess 4:16–17", "Rev 3:10", "John 14:3"],
        proponents: "J.N. Darby, C.I. Scofield, John Walvoord, Tim LaHaye, John MacArthur",
        notes: "The most popular view in American Evangelicalism. Originated with Darby in the 1830s; popularized through the Scofield Bible and Left Behind series."
      },
      {
        name: "Partial Rapture",
        spectrum: 15,
        tags: ["Dispensational variant", "Holiness", "Pentecostal"],
        summary: "Only those believers who are spiritually mature, faithful, and actively watching for Christ's return will be taken in the Rapture. 'Carnal' or unfaithful Christians are left behind to endure the fires of the Tribulation as a necessary process of purification, and they may be caught up in subsequent 'waves' of raptures later in the period.",
        key_texts: ["Matt 24:40–42", "Luke 21:36", "Heb 9:28", "Rev 3:3"],
        proponents: "Robert Govett, G.H. Pember, J.A. Seiss, Watchman Nee (in part)",
        notes: "A distinctive view that treats the Rapture not as an unconditional escape for all who possess saving faith, but as a reward for personal holiness and vigilance. Highly controversial among mainstream dispensationalists, who argue it splits the corporate Body of Christ and introduces works-righteousness into glorification."
      },
      {
        name: "Mid-Tribulation Rapture",
        spectrum: 25,
        tags: ["Dispensational variant"],
        summary: "The church is raptured at the midpoint of the 7-year Tribulation (after 3.5 years), before the 'Great Tribulation' begins. The first half is not divine wrath; the second half is.",
        key_texts: ["Rev 11:3", "Dan 9:27", "1 Cor 15:52"],
        proponents: "Gleason Archer, Norman Harrison",
        notes: "A minority position. Sometimes merged with 'pre-wrath' in popular usage, though they are technically distinct."
      },
      {
        name: "Pre-Wrath Rapture",
        spectrum: 50,
        tags: ["Evangelical"],
        summary: "The church endures the Tribulation through the seal and trumpet judgments but is raptured before God's specific 'wrath' — the bowl judgments — is poured out, somewhere in the second half of the 70th week. The seals and trumpets are Satan's/man's wrath, not God's.",
        key_texts: ["1 Thess 5:9", "Rev 6:17", "Matt 24:29–31"],
        proponents: "Marv Rosenthal, Robert Van Kampen",
        notes: "Makes careful distinction between 'tribulation' (man's persecution) and 'wrath' (God's judgment). Closer to post-trib than to pretrib — both pre-wrath and post-trib agree the church is present on earth throughout the Tribulation and endures persecution rather than being removed from it. The key difference from post-trib is that pre-wrath retains a two-stage structure: a discrete rapture event precedes the bowl judgments by some interval, after which Christ descends. Post-trib collapses that gap entirely."
      },
      {
        name: "Post-Tribulation Rapture",
        spectrum: 85,
        tags: ["Historic Premillennial", "Reformed", "Charismatic"],
        summary: "The church endures the full Tribulation period and is raptured at Christ's Second Coming — the rapture and the return are the same event. The church is protected through tribulation, not removed from it.",
        key_texts: ["Matt 24:29–31", "2 Thess 2:1–4", "Rev 20:4–6"],
        proponents: "George Ladd, Doug Moo, John Piper, N.T. Wright",
        notes: "The historic view of the church before Darby. Common in Reformed, Anglican, and many charismatic circles. Closer to pre-wrath than to pretrib — both views agree the church endures the Tribulation rather than being removed before it, and both ground this in 1 Thess 5:9 (the church is not appointed to wrath). The key distinction from pre-wrath is that post-trib eliminates the two-stage structure: the rapture and the Second Coming are the same moment, with believers rising to meet Christ in the air (apantēsis) as he descends — not being caught up and held while the bowls fall below."
      },
      {
        name: "Preterist Tribulation (Completed)",
        spectrum: 95,
        tags: ["Preterist", "Postmillennial", "Amillennial"],
        summary: "The Great Tribulation is an event of the distant past, entirely fulfilled in the first century during the Roman siege and destruction of Jerusalem in 70 AD. The language of cosmic collapse in the Olivet Discourse is prophetic hyperbole for the end of the Old Covenant order. There is no future global tribulation, and the 'Rapture' is simply the final resurrection at Christ's ultimate return.",
        key_texts: ["Matt 24:21", "Matt 24:34", "Rev 1:7", "Luke 21:20–24"],
        proponents: "Eusebius, Kenneth Gentry, Gary DeMar, R.C. Sproul (Partial Preterist)",
        notes: "Answers the timing problem of Matthew 24:34 ('this generation will not pass away') by assigning the Tribulation to the literal generation of the apostles. It shifts the focus from a future timeline to a historical vindication of the New Covenant church over localized Judean persecution."
      },
      {
        name: "No Rapture (Amil / Postmil)",
        spectrum: 100,
        tags: ["Amillennial", "Postmillennial", "Preterist"],
        summary: "The 'rapture' passages describe the resurrection at the Second Coming, not a separate event. There is no secret removal of the church; 1 Thess 4 describes believers rising to meet Christ as he descends — a royal greeting, not a removal.",
        key_texts: ["1 Thess 4:16–17", "Matt 24 (preterist)", "Rev 20"],
        proponents: "Augustine, Calvin, RC Sproul, Kim Riddlebarger",
        notes: "Dominant view historically and globally (outside American evangelicalism). The 'meeting in the air' (apantēsis) is a Greek idiom for going out to greet a returning dignitary."
      }
    ]
  },
  {
    id: "millennium",
    icon: "👑",
    title: "The Millennium",
    question: "What is the nature of Christ's 1,000-year reign?",
    views: [
      {
        name: "Dispensational Premillennialism",
        spectrum: 0,
        tags: ["Dispensational", "Popular Evangelical"],
        summary: "Christ returns pre-millennium, but the millennium involves a restored national Israel, a rebuilt temple, and reinstituted sacrificial system (as memorial). Two distinct peoples of God (Israel and Church) have distinct programs fulfilled in this age.",
        key_texts: ["Rev 20", "Ezek 40–48", "Dan 9"],
        proponents: "Darby, Scofield, Walvoord, Ryrie, Tim LaHaye",
        notes: "The dominant view in American evangelical seminaries for much of the 20th century. Replaced largely by progressive dispensationalism in academic circles."
      },
      {
        name: "Progressive Dispensational Premillennialism",
        spectrum: 10,
        tags: ["Dispensational", "Academic Evangelical", "Already/Not Yet"],
        summary: "Christ's Davidic kingdom is 'already' inaugurated in heaven following His ascension, but its 'not yet' literal, political fulfillment will occur during a future 1,000-year earthly reign. It maintains a distinct future role for ethnic/national Israel but rejects the radical separation between the Church and Israel seen in classic dispensationalism, viewing them as complementary phases of one progressive plan of redemption.",
        key_texts: ["Acts 2:29–36", "Eph 3:5–6", "Rev 20:4–6", "Heb 1:3"],
        proponents: "Craig Blaising, Darrell Bock, Robert Saucy, Bruce Ware",
        notes: "Developed in the late 1980s and 1990s as an academic modification of classic dispensationalism. It softens the strict 'two peoples of God' dichotomy and incorporates the 'already/not yet' kingdom framework popularized by historic premillennialists, while retaining a literal future millennium for Israel."
      },
      {
        name: "Premillennialism (Historic)",
        spectrum: 15,
        tags: ["Early Church", "Evangelical"],
        summary: "Christ returns before (pre) a literal 1,000-year reign on earth. The millennium is a future, physical kingdom in which Christ reigns from Jerusalem. Resurrection of the righteous precedes it; resurrection of the wicked follows.",
        key_texts: ["Rev 20:1–6", "Zech 14", "Isa 65:17–25"],
        proponents: "Justin Martyr, Irenaeus, George Ladd, Wayne Grudem",
        notes: "Distinguished from Dispensational Premillennialism by not requiring a pretrib rapture or a restored Mosaic temple system."
      },
      {
        name: "Theonomic Postmillennialism (Christian Reconstruction)",
        spectrum: 70,
        tags: ["Reformed", "Theonomic", "Socio-Political"],
        summary: "The Millennium is not merely a spiritual reality or a product of evangelistic revival alone, but a comprehensive socio-political transformation of the earth. As the Gospel spreads, biblical law (theonomy) will progressively be adopted by civil governments, leading to Christianized nations, the subjugation of Christ's enemies, and worldwide institutional prosperity *prior* to Christ's physical return.",
        key_texts: ["Matt 28:18–20", "Ps 110:1", "Gen 1:28", "1 Cor 15:24–25"],
        proponents: "R.J. Rushdoony, Greg Bahnsen, Gary North, Doug Wilson",
        notes: "Often called 'Christian Reconstructionism.' Unlike historical pietistic postmillennialism (which focused mostly on church growth and personal revivals), theonomic postmillennialism emphasizes the active dominion of Christians over law, economics, and civil institutions using the Old Testament judicial law as a standard."
      },
      {
        name: "Postmillennialism",
        spectrum: 85,
        tags: ["Reformed", "Optimistic", "Cultural Transformation"],
        summary: "The millennium is a future golden age brought about by the spread of the Gospel before Christ returns. The church gradually Christianizes society and culture; Christ returns after (post) this period of kingdom flourishing.",
        key_texts: ["Matt 28:18–20", "Ps 72", "Isa 2:2–4", "Rom 11:12"],
        proponents: "Jonathan Edwards, Charles Hodge, B.B. Warfield, RC Sproul Jr., Doug Wilson",
        notes: "Was common among 19th-century Reformed scholars. Declined after WWI. Revived by the Christian Reconstruction movement. Optimistic about history and cultural transformation."
      },
      {
        name: "Amillennialism",
        spectrum: 100,
        tags: ["Reformed", "Lutheran", "Catholic", "Orthodox"],
        summary: "The 1,000 years is symbolic — it represents the current church age between Christ's first and second comings. Satan is bound in the sense that the gospel goes to all nations. Christ reigns now from heaven; the millennium is not a future earthly period.",
        key_texts: ["Rev 20:1–6", "John 12:31", "Col 1:13"],
        proponents: "Augustine, Luther, Calvin, Bavinck, RC Sproul, Anthony Hoekema",
        notes: "The dominant view historically and globally. 'Amil' does not mean 'no millennium' but 'no literal future earthly 1,000 years.'"
      }
    ]
  },
  {
    id: "salvation",
    icon: "✝️",
    title: "Salvation & Soteriology",
    question: "How does God save, and what role does human will play?",
    views: [
      {
        name: "Hyper-Calvinism",
        spectrum: 0,
        tags: ["Extreme Reformed", "Minority"],
        summary: "God's sovereign election is so absolute that the 'free offer' of the Gospel to all people is denied or severely curtailed — only the elect should be called to repent. Human responsibility is effectively collapsed into divine sovereignty. Some deny that God desires the salvation of the non-elect in any meaningful sense.",
        key_texts: ["Rom 9:15–18", "John 6:37", "Matt 11:25–26"],
        proponents: "John Gill (partially), some Strict Baptists",
        notes: "Condemned by mainstream Calvinists including Spurgeon, who preached the free offer vigorously. The label is pejorative among Reformed scholars. True hyper-Calvinism denies duty-faith — the obligation of all sinners to believe the Gospel."
      },
      {
        name: "5-Point Calvinism (TULIP)",
        spectrum: 10,
        tags: ["Reformed", "Presbyterian", "Reformed Baptist"],
        summary: "All five points of the Synod of Dort (1618–19): Total Depravity, Unconditional Election, Limited (Definite) Atonement, Irresistible Grace, Perseverance of the Saints. Salvation is entirely monergistic — God alone effects regeneration, which logically precedes faith.",
        key_texts: ["Eph 1:4–5", "John 6:37–44", "Rom 8:29–30", "John 10:28–29"],
        proponents: "Calvin, Owen, Turretin, Spurgeon, Warfield, Packer, Sproul, Piper, Begg",
        notes: "Definite Atonement (Limited Atonement) is the most contested point — Christ's death perfectly secures salvation for the elect rather than making it merely possible for all. Perseverance is about God preserving the elect, not the believer white-knuckling their faith."
      },
      {
        name: "4-Point Calvinism (Amyraldism)",
        spectrum: 20,
        tags: ["Reformed", "Moderate Calvinist"],
        summary: "Accepts four of the five Dort points but rejects Limited Atonement in favor of a universal atonement (Christ died for all) that is efficaciously applied only to the elect. Sometimes called 'moderate Calvinism' or 'hypothetical universalism.'",
        key_texts: ["1 John 2:2", "John 3:16", "1 Tim 2:6", "2 Cor 5:14–15"],
        proponents: "Moïse Amyraut, Richard Baxter, Norman Geisler, Bruce Demarest, many Southern Baptists",
        notes: "Named after Amyraut (1596–1664) of Saumur Academy. Critiqued by strict Calvinists for logical incoherence — if atonement is universal but application is particular, what exactly did the atonement accomplish for the non-elect? Common in broader evangelical Calvinism."
      },
      {
        name: "Molinism",
        spectrum: 30,
        tags: ["Catholic", "Some Evangelical"],
        summary: "God possesses 'middle knowledge' — knowledge of what free creatures would freely do in any circumstance (counterfactuals of creaturely freedom). God uses this knowledge to actualize a world in which his purposes are achieved without overriding libertarian free will. Election is based on God's foreknowledge of who would freely believe under the right conditions.",
        key_texts: ["Matt 11:21–23", "1 Sam 23:10–13", "Rom 8:29"],
        proponents: "Luis de Molina, Alvin Plantinga, William Lane Craig, Thomas Flint",
        notes: "Attempts to fully reconcile Calvinist sovereignty and Arminian freedom. Critiqued from both sides — Calvinists say middle knowledge is incoherent or limits God; Arminians say it smuggles in soft determinism. Dominant in Jesuit theology."
      },
      {
        name: "Molinist Arminianism",
        spectrum: 40,
        tags: ["Molinist", "Arminian", "Evangelical"],
        summary: "God possesses middle knowledge of all counterfactuals of creaturely freedom — what any free creature would freely choose in any circumstance. Election is based on God's foreknowledge of who would freely believe, but God's omniscience guarantees the outcome. Combines Arminian free will with confidence in God's sovereignty through middle knowledge.",
        key_texts: ["Rom 8:29", "Matt 11:21–23", "1 Sam 23:10–13"],
        proponents: "Alvin Plantinga, William Lane Craig, Thomas Flint, some contemporary Arminians",
        notes: "A bridge position between classical Molinians (who are often Catholic) and Arminians. Maintains libertarian free will while affirming that God's middle knowledge makes election certain without determining choices. Less popular than classical Molinism among Evangelicals but growing in academic circles."
      },
      {
        name: "Theosis / Eastern Synergism",
        spectrum: 45,
        tags: ["Orthodox", "Eastern", "Patristic"],
        summary: "Salvation is not primarily a legal or forensic justification, but a lifelong process of transformation into the likeness of God (Theosis/Deification). Humanity inherited Adam's mortality and corrupted environment, but not his personal guilt. Salvation requires synergism — a continuous, free cooperation between divine grace and human will. Through the sacraments and ascetic life, believers become 'partakers of the divine nature.'",
        key_texts: ["2 Pet 1:4", "Phil 2:12–13", "Rom 8:29", "Ps 82:6"],
        proponents: "Athanasius, Gregory Palamas, Vladimir Lossky",
        notes: "Sits outside the Western Calvinist/Arminian framework. While synergistic, it strongly rejects semi-Pelagianism because human effort is seen as entirely dependent upon and enveloped by uncreated divine energy, rather than an independent human initiative."
      },
      {
        name: "Classical Arminianism",
        spectrum: 50,
        tags: ["Arminian", "Reformed Arminian"],
        summary: "Conditional election based on God's foreknowledge of faith. Universal atonement. Prevenient grace enables but does not compel belief — libertarian free will is restored to all. Saving grace can be resisted. Apostasy is genuinely possible for true believers.",
        key_texts: ["John 3:16", "Rom 8:29", "Acts 7:51", "Heb 6:4–6"],
        proponents: "Jacobus Arminius, Simon Episcopius, the Five Articles of Remonstrance (1610)",
        notes: "Arminius himself was closer to Reformed theology than his followers. He affirmed total depravity and the necessity of prevenient grace — he was not a semi-Pelagian. The Remonstrance (1610) defines the classical position. Condemned at the Synod of Dort (1618–19)."
      },
      {
        name: "Wesleyan Molinism",
        spectrum: 55,
        tags: ["Methodist", "Wesleyan", "Molinist"],
        summary: "Combines Wesley's emphasis on universal prevenient grace with Molinist middle knowledge. God's prevenient grace (sufficient for all to respond) operates through middle knowledge — God ordains the circumstances and grace that will lead free creatures to believe. Maintains both Wesley's optimism about grace's availability and Molina's confidence in God's sovereignty.",
        key_texts: ["1 Tim 2:4", "Titus 2:11", "Rom 8:29–30"],
        proponents: "Some contemporary Wesleyan scholars exploring Molinist frameworks",
        notes: "A relatively new synthesis not widely systematized yet. Addresses the Wesleyan tension between 'universal grace is available' and 'we still need to explain how God ensures his purposes' by using middle knowledge. Still experimental in Methodist theology but represents an attempt to give Wesleyanism more robust metaphysical grounding."
      },
      {
        name: "Wesleyan Arminianism",
        spectrum: 60,
        tags: ["Methodist", "Wesleyan", "Holiness"],
        summary: "Builds on classical Arminianism but adds Wesley's distinctive doctrines: universal prevenient grace (sufficient for all to respond), entire sanctification (a second definite work of grace perfecting love), and optimism about grace's transformative power. Salvation can be lost through willful apostasy.",
        key_texts: ["1 John 4:18", "Phil 3:12–14", "Heb 10:26–27", "2 Pet 1:10"],
        proponents: "John Wesley, Charles Wesley, John Fletcher, Thomas Oden",
        notes: "Wesley's 'entire sanctification' or 'perfect love' is distinct from sinless perfection — it is the purification of intent (loving God with the whole heart) not the elimination of mistakes. Heavily influenced the Holiness and Pentecostal movements."
      },
      {
        name: "Open Theism",
        spectrum: 70,
        tags: ["Minority Evangelical"],
        summary: "God does not have exhaustive foreknowledge of future free decisions. The future is genuinely open — God knows all possibilities but not which ones free creatures will actualize. God takes real risks in creation, responds genuinely to prayer, and can be surprised by human choices. Election is genuinely conditional.",
        key_texts: ["Gen 22:12", "Jer 3:7", "Jonah 3:10", "Exod 32:14"],
        proponents: "Clark Pinnock, Greg Boyd, John Sanders, Richard Rice",
        notes: "A radicalized Arminianism. Declared outside evangelical bounds by many (ETS voted on it in 2001). Proponents argue it takes 'God repented' and 'God tested Abraham' passages at face value rather than explaining them away as anthropomorphism."
      },
      {
        name: "Semi-Pelagianism",
        spectrum: 80,
        tags: ["Condemned", "Popular Folk Christianity"],
        summary: "Human beings, though weakened by the Fall, retain enough natural capacity to make the first move toward God — to seek, inquire, or will toward salvation — and God's grace then responds to and assists that initial human initiative. Grace cooperates with natural human effort.",
        key_texts: ["Deut 4:29", "Jer 29:13", "Acts 17:27"],
        proponents: "John Cassian (historically), much of popular evangelical preaching implicitly",
        notes: "Condemned at the Council of Orange (529 AD) as heresy even before the Reformation. The distinction from Arminianism is crucial: Arminians insist prevenient grace must come first; semi-Pelagians say humans can initiate without grace. Much of popular 'decision theology' is functionally semi-Pelagian without knowing it."
      },
      {
        name: "Pelagianism",
        spectrum: 100,
        tags: ["Heretical", "Condemned"],
        summary: "Human beings are not fallen in the Augustinian sense — the will is fully free and capable of choosing good without divine grace. Adam's sin set a bad example but did not corrupt human nature. Salvation is achieved by moral effort and free choice. Grace assists but is not necessary for the initial turn to God.",
        key_texts: ["Deut 30:19", "Sir 15:14–17 (Apocrypha)"],
        proponents: "Pelagius (c. 354–418), Caelestius",
        notes: "Condemned at the Council of Carthage (418 AD) and the Council of Ephesus (431 AD). Augustine's polemics against Pelagius shaped the entire Western doctrine of grace. Almost no one consciously holds this position today, though critics apply the label to semi-Pelagianism."
      }
    ]
  },
  {
    id: "israel",
    icon: "✡️",
    title: "Israel & the Church",
    question: "What is God's plan for ethnic/national Israel?",
    views: [
      {
        name: "Supersessionism (Replacement Theology)",
        spectrum: 0,
        tags: ["Traditional Catholic", "Some Reformed"],
        summary: "The church has fully replaced or fulfilled Israel's role as God's covenant people. OT promises to Israel are now fulfilled in the church spiritually. There is no distinct future for ethnic or national Israel as such.",
        key_texts: ["Gal 3:29", "Rom 9:6–8", "1 Pet 2:9"],
        proponents: "Justin Martyr (implicitly), Augustine, much of medieval Catholicism",
        notes: "Three types: punitive (Israel rejected for disobedience), economic (natural development of covenant), structural (church always was Israel). Most modern Reformed scholars prefer 'fulfillment' language."
      },
      {
        name: "Covenant Theology (Fulfilled/Expanded)",
        spectrum: 30,
        tags: ["Reformed", "Presbyterian", "Amillennial"],
        summary: "One covenant people of God through all ages. The church is the continuation/expansion of Israel — not a replacement. OT promises are fulfilled in Christ and the church. Romans 11 promises a future large-scale conversion of Jewish people, not a political restoration.",
        key_texts: ["Rom 11:25–26", "Eph 2:11–22", "Gal 6:16"],
        proponents: "Herman Bavinck, John Murray, RC Sproul, Graeme Goldsworthy",
        notes: "Careful to distinguish from crude replacement theology. Still expects a future revival among Jewish people."
      },
      {
        name: "New Covenant Theology",
        spectrum: 50,
        tags: ["Reformed Baptist", "Progressive"],
        summary: "The New Covenant fulfills and transcends the Abrahamic/Mosaic covenants. The 'Israel of God' is the church. OT land and political promises find their antitype in Christ (the true Israel) and the new creation — not in a restored Jewish state.",
        key_texts: ["Heb 3–4", "Gal 4:21–31", "Rev 21"],
        proponents: "Tom Wells, Fred Zaspel, some Reformed Baptists",
        notes: "Overlaps with covenant theology but more radically typological in hermeneutics."
      },
      {
        name: "Messianic / One New Man",
        spectrum: 65,
        tags: ["Messianic Jewish", "Ephraim teaching"],
        summary: "Israel and the nations are being united into 'one new man' (Eph 2) — not by the nations becoming Israel, nor Israel disappearing, but through Yeshua. Jewish identity and calling remain distinct and valid within the body. National restoration of Israel is real and ongoing.",
        key_texts: ["Eph 2:11–19", "Rom 11", "Zech 12–14"],
        proponents: "Daniel Juster, David Stern, Mark Kinzer",
        notes: "Strongly affirms Jewish continuity and calling. Critiques both supersessionism and dispensationalism. Sees the modern state of Israel as theologically significant but not uncritically."
      },
      {
        name: "Progressive Dispensationalism",
        spectrum: 75,
        tags: ["Dispensational", "Academic Evangelical"],
        summary: "Rejects the classic view that Israel and the Church are two entirely distinct peoples with separate eternal destinies. Instead, they are two complementary phases of a single, unified plan of redemption. However, God's covenant promises regarding national, ethnic, and land restoration for Israel remain literal and will be fulfilled in the future millennial kingdom.",
        key_texts: ["Acts 2:29–36", "Rom 11:25–29", "Eph 3:5–6"],
        proponents: "Craig Blaising, Darrell Bock, Robert Saucy",
        notes: "A major modern shift in academic dispensationalism that softens the sharp dichotomies of Scofield and Darby, moving closer to an 'already/not yet' kingdom model while preserving a future for national Israel."
      },
      {
        name: "Classic Dispensationalism",
        spectrum: 85,
        tags: ["Dispensational", "Popular Evangelical"],
        summary: "Israel and the Church are two distinct peoples of God with separate programs, destinies, and covenants. OT promises to Israel are literal and will be literally fulfilled in a restored Jewish kingdom. The church is a 'parenthesis' in God's primary plan for Israel.",
        key_texts: ["Rom 11", "Ezek 36–37", "Dan 9", "Zech 14"],
        proponents: "Darby, Scofield, Chafer, Walvoord",
        notes: "The foundational framework for the Left Behind eschatological boom. Insists that God's clock for Israel stops during the church age and resumes only after the rapture."
      },
      {
        name: "Dual-Covenant Theology",
        spectrum: 100,
        tags: ["Mainline Protestant", "Liberal Catholic", "Post-Holocaust"],
        summary: "God's covenant with the Jewish people through Abraham and Moses is eternal, never broken, and fully sufficient for their salvation. Jesus Christ instituted a new covenant intended exclusively for the Gentile nations. Therefore, Jewish people do not need to accept Jesus or convert to Christianity to be reconciled to God, and Christian missionary targets should exclude Jews.",
        key_texts: ["Rom 11:29", "Gen 17:7", "John 4:22"],
        proponents: "Franz Rosenzweig, Reinhold Niebuhr, various post-Vatican II mainline statements",
        notes: "Gained significant traction among Western mainline denominations following the Holocaust as a rejection of historic anti-Semitism. Heavily criticized by both traditional evangelicals and Messianic Jews for undermining the absolute exclusivity claims of Jesus in John 14:6."
      }
    ]
  },
  {
    id: "creation",
    icon: "🌍",
    title: "Creation & Origins",
    question: "How and when did God create the universe?",
    views: [
      {
        name: "Young Earth Creationism (YEC)",
        spectrum: 5,
        tags: ["Conservative Evangelical", "Fundamentalist"],
        summary: "God created the universe in six literal 24-hour days approximately 6,000–10,000 years ago. The global flood of Noah explains most geological strata. Scientific evidence for an old earth reflects faulty assumptions about initial conditions.",
        key_texts: ["Gen 1–2", "Exod 20:11", "Gen 5 & 11 genealogies"],
        proponents: "Henry Morris, Ken Ham, Answers in Genesis, Creation Research Society",
        notes: "Holds that the plain reading of Genesis demands 24-hour days and a young universe. Views old-earth positions as compromising Scripture to accommodate secular science."
      },
      {
        name: "Apparent Age Theory (Omphalos Hypothesis)",
        spectrum: 10,
        tags: ["Young Earth", "Minority", "Philosophical"],
        summary: "God created the universe recently but with a fully formed apparent history — light from distant stars already en route, geological strata already layered, trees already ringed. The universe looks old because it was created mature and functional, not because it actually is old. As Adam was created as an adult rather than an infant, so the cosmos was created 'aged.'",
        key_texts: ["Gen 1–2", "John 2:1–11", "Ps 33:9"],
        proponents: "Philip Henry Gosse, some modern YEC apologists",
        notes: "Named after Gosse's 1857 book Omphalos (Greek for 'navel'). The strongest objection is theological: it makes God appear deceptive by embedding false signals. Most YECs prefer to dispute dating assumptions rather than concede apparent age. The hypothesis is technically unfalsifiable."
      },
      {
        name: "Gap Theory",
        spectrum: 25,
        tags: ["Pentecostal", "Older Dispensational"],
        summary: "A large gap of time exists between Genesis 1:1 (original creation) and 1:2 ('formless and void' — a judgment state). The six days of creation are a re-creation after a catastrophic fall of Satan that destroyed the original world.",
        key_texts: ["Gen 1:1–2", "Isa 14:12", "Jer 4:23–26"],
        proponents: "Thomas Chalmers, C.I. Scofield, Harry Rimmer",
        notes: "Popular in the early 20th century. Allows an old universe while maintaining six-day creation. Largely replaced by other old-earth views in academic circles."
      },
      {
        name: "Day-Age Theory (Old Earth Creationism)",
        spectrum: 50,
        tags: ["Conservative Evangelical", "Old Earth"],
        summary: "The 'days' of Genesis 1 are long ages corresponding to geological epochs. God created through a sequence matching the Genesis order but over billions of years. Miracles of creation still occurred; macro-evolution is generally rejected.",
        key_texts: ["Gen 1 (yom = 'age')", "2 Pet 3:8", "Ps 90:4"],
        proponents: "Hugh Ross (Reasons to Believe), Gleason Archer, Francis Schaeffer",
        notes: "Holds that scientific evidence for an old earth is valid and that Genesis allows non-literal 'days.' Distinct from theistic evolution in rejecting unguided common descent."
      },
      {
        name: "Framework Hypothesis",
        spectrum: 65,
        tags: ["Reformed", "Academic"],
        summary: "Genesis 1 is structured as a literary/artistic framework, not a chronological account. Days 1–3 form the 'realms' and days 4–6 their 'rulers.' The account communicates theological truth (who created, why) rather than scientific sequence.",
        key_texts: ["Gen 1", "Ps 104"],
        proponents: "Meredith Kline, Henri Blocher, Mark Futato",
        notes: "Allows complete compatibility with any scientific timeline. Influential in Reformed seminaries. Focuses on ancient Near Eastern literary genre."
      },
      {
        name: "Functional Creation (Cosmic Temple Inauguration)",
        spectrum: 78,
        tags: ["Evangelical Academic", "Ancient Near East Context"],
        summary: "Genesis 1 is not an account of material origins (how physical matter came into existence), but an account of functional origins. In the ancient Near Eastern mindset, something did not 'exist' until it had a role or function within an ordered system. The six days describe God assigning functions to the already existing material cosmos, turning the universe into His sacred Temple, culminating on Day 7 when He 'rests' to inhabit and rule it.",
        key_texts: ["Gen 1:1–2", "Isa 66:1", "Ps 132:7–8/14"],
        proponents: "John H. Walton (The Lost World of Genesis One), N.T. Wright (in part)",
        notes: "A major modern shift in evangelical hermeneutics. By separating the biblical text from questions of material ontology, it renders the biblical account completely neutral toward modern scientific questions regarding the age of the earth or biological evolution, arguing Genesis simply isn't answering those questions."
      },
      {
        name: "Evolutionary Creation (Theistic Evolution)",
        spectrum: 95,
        tags: ["Mainline Protestant", "Catholic", "BioLogos"],
        summary: "God created through the natural process of evolution. Common descent of all life, including humans, is affirmed. God's action was through natural processes he designed and sustains. Genesis is read as ancient cosmological myth conveying theological truth.",
        key_texts: ["Rom 1:20", "Ps 19:1", "Gen 1–2 (literary)"],
        proponents: "BioLogos (Francis Collins, Scot McKnight, Pete Enns), Karl Giberson",
        notes: "Spectrum within: some affirm a historical Adam (genealogical Adam hypothesis — S. Joshua Swamidass); others see Adam as archetypal, not historical. Proponents increasingly prefer 'Evolutionary Creation' over 'Theistic Evolution' to emphasize creation as the primary noun."
      }
    ]
  },
    {
    id: "baptism",
    icon: "💧",
    title: "Baptism",
    question: "Who should be baptized, and what does the water actually do?",
    views: [
      {
        name: "Baptismal Regeneration (Sacramental Reality)",
        spectrum: 0,
        tags: ["Catholic", "Orthodox", "Anglican (some)"],
        summary: "Baptism is a sacrament instituted by Christ that literally effects what it signifies: it washes away original and personal sin, imparts the Holy Spirit, infuses saving grace, and regenerates the soul. It operates ex opere operato (by the action itself). It is administered to both infants (to cleanse original sin and bring them into the church) and adult converts.",
        key_texts: ["John 3:5", "Acts 2:38", "1 Pet 3:21", "Titus 3:5"],
        proponents: "Augustine, Thomas Aquinas, Council of Trent, Eastern Orthodox Holy Synod",
        notes: "The historic, dogmatic position of Rome and the East. While both affirm regeneration in the waters, Orthodoxy practices full triple immersion to symbolize dying and rising, whereas Catholicism primarily practices affusion (pouring)."
      },
      {
        name: "Sacramental Renewal & Forgiveness",
        spectrum: 18,
        tags: ["Lutheran"],
        summary: "Baptism is a true means of grace through which God offers and conveys the forgiveness of sins, rescue from death, and eternal salvation. It is not a mere human work or symbol, but a divine work where water is combined with God's word. Infants should be baptized because they are included in Christ's command and God can ignite a passive, miraculous 'infant faith' in their hearts.",
        key_texts: ["Mark 16:16", "Acts 22:16", "Col 2:11–12"],
        proponents: "Martin Luther, Small Catechism, Augsburg Confession",
        notes: "Differs from the Catholic view by sharply anchoring the sacrament's efficacy in faith and the Word, rather than scholastic sacerdotal frameworks. Rejects the Anabaptist view that infants cannot benefit from the rite."
      },
      {
        name: "Covenantal Paedobaptism",
        spectrum: 35,
        tags: ["Reformed", "Presbyterian"],
        summary: "Baptism does not mechanically regenerate the soul or guarantee salvation, but it is the New Covenant sign and seal that replaces Old Covenant circumcision. It is properly administered to the infants of believing parents to mark them out as members of the visible covenant community and heirs to God's promises. Salvation is applied later when the child personally embraces the gospel by faith.",
        key_texts: ["Col 2:11–12", "Acts 2:39", "Gen 17:7", "1 Cor 7:14"],
        proponents: "John Calvin, Westminster Standards, Ulrich Zwingli, Charles Hodge",
        notes: "Strictly distinguishes between the visible church (all baptized members) and the invisible church (only the true elect). Baptism brings an infant into the covenant structure, exposing them to its blessings and obligations, but personal regeneration remains sovereign."
      },
      {
        name: "Dual-Practice / Covenantal Inclusivism",
        spectrum: 50,
        tags: ["Methodist", "Wesleyan"],
        summary: "Affirms infant baptism as a sign of God's prevenient grace operating in a child's life before they can choose Him, making them part of the covenant family. However, it also fully validates and embraces believer's baptism for adult converts. The mode (sprinkling, pouring, or immersion) is considered indifferent; the spiritual reality of initiation into Christ's body is what matters.",
        key_texts: ["Acts 16:33", "Rom 6:3–4", "Titus 3:5"],
        proponents: "John Wesley, Methodist Articles of Religion",
        notes: "Highly pastoral and flexible. It avoids the rigid definitions of strict Reformed covenant structures while maintaining a strong historic commitment to the validity of childhood baptism as an objective declaration of grace."
      },
      {
        name: "Credobaptism / Believer's Baptism",
        spectrum: 75,
        tags: ["Baptist", "Anabaptist", "Evangelical"],
        summary: "Baptism is an ordinance, not a saving sacrament. It is strictly reserved for those who have reached an age of accountability and made a conscious, credible personal profession of saving faith in Jesus Christ. It is an outward public declaration of an already occurred inward spiritual conversion. The only biblical and valid mode is full immersion in water.",
        key_texts: ["Matt 28:19", "Acts 2:41", "Rom 6:3–4", "Acts 8:36–38"],
        proponents: "Balthasar Hubmaier, London Baptist Confession, Charles Spurgeon, mainstream Evangelicals",
        notes: "The dominant view in modern global evangelicalism. It completely rejects infant baptism as invalid and unscriptural, meaning those baptized as infants must be 're-baptized' (though proponents argue this is their first true baptism) upon dynamic conversion."
      },
      {
        name: "Spirit-Only / Non-Water Baptism",
        spectrum: 100,
        tags: ["Quaker", "Salvation Army", "Ultra-Dispensational"],
        summary: "Physical water baptism was a temporary, localized Jewish ritual used by John the Baptist and the early Jewish church to bridge dispensations, but it is not intended for the permanent Gentile church. True Christian baptism is entirely spiritual—the direct baptism of the Holy Spirit into the inner life of the believer. External material rituals are unnecessary and risk shifting focus away from inward regeneration.",
        key_texts: ["Matt 3:11", "Eph 4:5", "1 Cor 1:17", "1 Cor 12:13"],
        proponents: "George Fox, William Booth, E.W. Bullinger",
        notes: "A radical consistency in interiorizing faith. Both the Religious Society of Friends (Quakers) and the Salvation Army completely omit water baptism from their communal religious practices, prioritizing purely spiritualized conversion and ethical fruit."
      }
    ]
  },
  {
    id: "gifts",
    icon: "🕊️",
    title: "Spiritual Gifts",
    question: "Are miraculous gifts still active today?",
    views: [
      {
        name: "Cessationism",
        spectrum: 0,
        tags: ["Reformed", "MacArthurite"],
        summary: "The miraculous 'sign gifts' (tongues, prophecy, healing, apostleship) ceased with the closing of the apostolic age and the completion of the NT canon. These gifts authenticated the apostles and their message; that function is now fulfilled by Scripture alone.",
        key_texts: ["1 Cor 13:8–10", "Heb 2:3–4", "Eph 2:20"],
        proponents: "B.B. Warfield, John MacArthur, RC Sproul, Richard Gaffin",
        notes: "Soft cessationism (gifts became rare) vs. hard cessationism (gifts completely ceased). MacArthur's Strange Fire conference (2013) represents the hard cessationist position."
      },
      {
        name: "Functional Cessationism",
        spectrum: 5,
        tags: ["Reformed", "Evangelical", "Practical"],
        summary: "Sign gifts theoretically continue but are functionally absent from the church in practice. God *could* grant them but rarely or never does. The focus is on the sufficiency of Scripture and the Word rather than expectation of miraculous gifts. A pragmatic position between hard cessationism and continuationism.",
        key_texts: ["1 Cor 13:8–10", "Heb 2:3–4", "2 Tim 3:16–17"],
        proponents: "Some Reformed evangelicals, moderate cessationists",
        notes: "Avoids the logical problem of hard cessationism (why would God prohibit gifts?) while maintaining skepticism toward charismatic practice. Often held by those sympathetic to continuationism theologically but unconvinced by modern charismatic manifestations."
      },
      {
        name: "Mild/Historical Cessationism",
        spectrum: 15,
        tags: ["Moderate", "Evangelical"],
        summary: "Sign gifts were meant to authenticate the apostolic message and gradually ceased as the canon closed and the apostolic office ended. However, God is not bound by this pattern and *could* grant exceptional gifts in extraordinary circumstances. Less dogmatic than hard cessationism; leaves room for rare divine exceptions.",
        key_texts: ["1 Cor 13:8–10", "Heb 2:3–4", "Eph 2:20"],
        proponents: "D.A. Carson, some Presbyterian and evangelical scholars",
        notes: "A softer version of cessationism that acknowledges the biblical gifts were real and normative for the apostolic era, but maintains skepticism about their continuation. Distinguished from hard cessationism by not insisting God could never grant them today."
      },
      {
        name: "The Analogous Gifts Framework",
        spectrum: 35,
        tags: ["Continuationist", "Evangelical"],
        summary: "Sign gifts continue but in *analogous* rather than identical forms. Modern prophecy is not the same as OT/apostolic prophecy — it is fallible, congregational, and subject to testing. Tongues operate but with stricter guidelines. Healing happens but through prayer and means, not word-of-faith declarations. Maintains continuationism while addressing historical abuses.",
        key_texts: ["1 Cor 14:29–32", "1 Thess 5:19–21", "1 John 4:1"],
        proponents: "Wayne Grudem, Sam Storms",
        notes: "A mediating position serving as the primary academic mechanism to defend standard Continuationism without threatening a closed biblical canon. It argues that the underlying spiritual substance of the gifts persists while structural forms have adapted following the apostolic era."
      },
      {
        name: "Sacramental Miracularism / Historic Continuity",
        spectrum: 45,
        tags: ["Catholic", "Orthodox", "Historical"],
        summary: "Rejects both Protestant Cessationism and modern Pentecostalism. The supernatural and miraculous have never ceased in the Church and are deeply woven into its sacramental and mystical life. However, this is manifested through the intercession of the saints, Marian apparitions, incorruptible relics, stigmata, and miraculous healings (such as at Lourdes), rather than conversational tongues or congregational prophecy. The ultimate miracle is the Eucharistic transformation.",
        key_texts: ["Mark 16:17–18", "John 14:12", "James 5:14–15"],
        proponents: "Augustine (in his later writings), Thomas Aquinas, Catholic/Orthodox Magisterium",
        notes: "While affirming the continuous presence of the miraculous throughout church history, it maintains strict institutional vetting procedures for miracles and treats private revelations or apparitions as non-binding on the global dogmatic faith of believers."
      },
      {
        name: "Open But Cautious",
        spectrum: 50,
        tags: ["Moderate Evangelical"],
        summary: "The gifts may continue today but the charismatic movement as practiced raises serious concerns about abuse, confusion, and unbiblical practices. Openness to genuine gifts with strong skepticism toward specific charismatic expressions.",
        key_texts: ["1 Thess 5:19–21", "1 Cor 14:40"],
        proponents: "D.A. Carson, Doug Moo",
        notes: "A cautious middle ground. Not strictly cessationist but not enthusiastically continuationist. Emphasizes the need for careful discernment."
      },
      {
        name: "Pentecostalism / Classic Charismatic View",
        spectrum: 60,
        tags: ["Pentecostal", "Charismatic", "Continuationist"],
        summary: "All the gifts of the Spirit, including tongues, prophecy, healing, and words of knowledge, continue in full operation today as they did in Acts. Spirit baptism (a second distinct experience from conversion) is normative and often evidenced by speaking in tongues. Gifts are given for the edification of the church and the advancement of the kingdom.",
        key_texts: ["1 Cor 12–14", "Acts 2:4", "Acts 19:1–6", "Mark 16:17–18"],
        proponents: "Foursquare, Assemblies of God, Church of God in Christ, Kathryn Kuhlman, Aimee Semple McPherson",
        notes: "The classical Pentecostal position emphasizing Spirit baptism as normative and tongues as initial evidence. Distinct from later charismatic renewal (which emphasizes gifts without necessarily the Spirit baptism doctrine) and from Word of Faith (which adds prosperity teaching)."
      },
      {
        name: "The Third Wave Movement",
        spectrum: 70,
        tags: ["Charismatic", "Vineyard", "Signs & Wonders"],
        summary: "The Holy Spirit's power and gifts (especially healing, prophecy, deliverance) are actively operative today and should be expected in ministry and evangelism. Emphasizes 'power evangelism' — demonstrating the kingdom through supernatural signs. Less focused on glossolalia than classical Pentecostalism; more focused on healings and prophetic words.",
        key_texts: ["Luke 10:9", "1 Cor 12:7–11", "Mark 16:17–20"],
        proponents: "John Wimber, C. Peter Wagner, Vineyard churches",
        notes: "Called 'Third Wave' because it follows first-wave Pentecostalism and second-wave Charismatic Renewal. Emphasizes kingdom power and practical demonstration over doctrinal distinctives like Spirit baptism. Very influential in contemporary worship and healing prayer."
      },
      {
        name: "Hyper-Charismatic / Word of Faith View",
        spectrum: 90,
        tags: ["Prosperity Gospel", "Word of Faith", "Controversial"],
        summary: "Believers have authority and power to command supernatural results through spoken faith declarations. Sickness and poverty are always the will of Satan, never God's will. Speaking things into existence, 'name it and claim it,' decreeing prosperity and healing — these are seen as proper exercise of believer's authority. Gifts are primarily for personal benefit and material blessing.",
        key_texts: ["Mark 11:24", "Prov 23:7", "3 John 2"],
        proponents: "Kenneth Copeland, Joyce Meyer, Creflo Dollar, Benny Hinn",
        notes: "Widely critiqued even by charismatics and continuationists for theological errors (conflating believer's authority with divine sovereignty, prosperity as salvific sign). Many evangelical leaders explicitly reject this as distorting Scripture. The most extreme and problematic expression of charismatic theology."
      },
      {
        name: "Continuationism",
        spectrum: 100,
        tags: ["Charismatic", "Pentecostal", "Many Evangelicals"],
        summary: "All the gifts of the Spirit listed in the NT continue to be given by the Spirit today. Prophecy, tongues, healing, and words of knowledge operate in the contemporary church, though under the authority of Scripture.",
        key_texts: ["1 Cor 12–14", "Acts 2:17–18", "Joel 2:28–29"],
        proponents: "Wayne Grudem, Sam Storms, Jack Deere, most of the global church",
        notes: "The majority view globally and historically. Differs from hyper-charismaticism by insisting gifts are tested against Scripture and are not ongoing revelation at the level of the canon."
      }
    ]
  },
  {
    id: "lords_supper",
    icon: "🍞",
    title: "The Lord's Supper",
    question: "What happens in Communion / Eucharist?",
    views: [
      {
        name: "Transubstantiation",
        spectrum: 0,
        tags: ["Catholic", "Some Anglo-Catholic"],
        summary: "At consecration, the bread and wine are transformed in substance into the body and blood of Christ, though the outward appearances (accidents) remain. Christ is truly, really, and substantially present. The Mass is a re-presentation of the sacrifice of Calvary.",
        key_texts: ["John 6:53–56", "Luke 22:19–20", "1 Cor 11:29"],
        proponents: "Fourth Lateran Council, Council of Trent, Catholic Magisterium",
        notes: "Defined dogma of the Catholic Church using Aristotelian substance/accident metaphysics. Rejected at the Reformation."
      },
      {
        name: "The Divine Mystery (Sacramental Realism)",
        spectrum: 12,
        tags: ["Orthodox", "Eastern", "Mystical"],
        summary: "The bread and wine are truly, radically changed into the literal body and blood of Christ by the operation of the Holy Spirit during the prayer of invocation (Epiklesis). However, human logic cannot and should not attempt to explain *how* this happens. It explicitly rejects the Roman Catholic scholastic categories of 'substance' and 'accidents', treating the change as an impenetrable, holy mystery.",
        key_texts: ["John 6:51–58", "1 Cor 10:16", "Luke 22:19"],
        proponents: "John Damascene, Nicholas Cabasilas, Eastern Orthodox Holy Synod",
        notes: "While sharing the same practical reverence for the elements as Roman Catholicism, Orthodoxy avoids dogmatic philosophical definitions. The ultimate purpose of the change is not an abstract miracle on the altar, but the transformation and deification (Theosis) of the believers who partake."
      },
      {
        name: "Consubstantiation / Sacramental Union",
        spectrum: 25,
        tags: ["Lutheran"],
        summary: "Christ's body and blood are truly present 'in, with, and under' the bread and wine — a sacramental union, not a transformation. The bread remains bread; yet Christ is truly bodily present. The Lord's Supper confers forgiveness of sins.",
        key_texts: ["Matt 26:26", "1 Cor 10:16"],
        proponents: "Luther, Lutheran confessions, Formula of Concord",
        notes: "'Consubstantiation' is a term Lutherans sometimes reject as imprecise. The preferred Lutheran term is 'Real Presence' or 'sacramental union.'"
      },
      {
        name: "Receptionism (Via Media)",
        spectrum: 45,
        tags: ["Anglican", "Methodist roots", "Moderate"],
        summary: "Christ is truly and spiritually present to the believer, but this presence is located not objectively within the bread and wine themselves, but internally within the heart of the faithful communicant who receives them. If an unbeliever eats the elements, they receive only bread and wine; but a believer simultaneously receives the spiritual reality of Christ.",
        key_texts: ["1 Cor 11:28", "John 6:35", "1 Cor 10:16"],
        proponents: "Thomas Cranmer, Richard Hooker, John Wesley",
        notes: "The dominant view in classic Anglicanism and early Methodism. It allows the church to affirm a 'Real Presence' of Christ in the service without requiring the belief that Christ's localized body is physically or structurally attached to a piece of bread sitting on an altar."
      },
      {
        name: "Spiritual / Calvinist Presence",
        spectrum: 60,
        tags: ["Reformed", "Presbyterian", "Anglican"],
        summary: "Christ is truly present in the Supper, but spiritually — not bodily. The glorified Christ at the Father's right hand is not locally present in the elements. By faith, believers truly feed on Christ spiritually through the Spirit as they eat and drink.",
        key_texts: ["1 Cor 10:16", "John 6:63", "Westminster Confession"],
        proponents: "Calvin, Westminster Standards, RC Sproul",
        notes: "Rejects both transubstantiation and mere memorialism. The Supper is a means of grace — a real spiritual feeding, not just mental remembrance."
      },
      {
        name: "Memorialism / Symbolic View",
        spectrum: 100,
        tags: ["Baptist", "Zwinglian", "Many Evangelicals"],
        summary: "The bread and wine are symbols and memorials of Christ's sacrifice. Nothing physical or spiritual changes in the elements. The Supper is an ordinance of remembrance and proclamation — a visible enactment of the Gospel — not a means of conveying grace.",
        key_texts: ["Luke 22:19", "1 Cor 11:26"],
        proponents: "Zwingli, most Baptists, many evangelical churches",
        notes: "The dominant view in American evangelicalism. Critics (including Calvin) felt Zwingli emptied the Supper of its power by making it purely cognitive."
      }
    ]
  },
  {
    id: "scripture",
    icon: "📖",
    title: "Scripture & Authority",
    question: "What is Scripture's nature and its authority relative to tradition?",
    views: [
      {
        name: "Strict Inerrancy / Textual Verbal Plenary Inspiration",
        spectrum: 0,
        tags: ["Fundamentalist", "Conservative Evangelical"],
        summary: "Scripture is verbal-plenary inspired—every individual word was intentionally chosen by God through human authors. Consequently, the original autographs are absolutely inerrant, not only in matters of faith and salvation, but also in every statement regarding history, geography, and natural science. It must be interpreted using a literal, grammatical-historical hermeneutic.",
        key_texts: ["2 Tim 3:16", "2 Pet 1:20–21", "Ps 19:7"],
        proponents: "Chicago Statement on Biblical Inerrancy (1978), B.B. Warfield, Charles Hodge",
        notes: "Formulated as a distinct dogmatic defense in the late 19th and early 20th centuries to combat the rise of European higher criticism. Rejects any entry of historical errors or mythological frameworks into the text."
      },
      {
        name: "Sola Scriptura",
        spectrum: 15,
        tags: ["Protestant", "Reformed", "Evangelical"],
        summary: "Scripture alone is the supreme, final, and infallible authority in all matters of faith and practice. Church tradition, creeds, and councils have authority only insofar as they conform to Scripture. The individual believer can in principle evaluate all teaching by the Bible.",
        key_texts: ["2 Tim 3:16–17", "Isa 8:20", "Acts 17:11"],
        proponents: "Luther, Calvin, all major Protestant confessions",
        notes: "Not 'solo scriptura' (no tradition matters) but Scripture as the norming norm above all other norms. Tradition is a guide but not an equal authority."
      },
      {
        name: "Prima Scriptura",
        spectrum: 35,
        tags: ["Wesleyan", "Some Anglican"],
        summary: "Scripture is the primary authority but not the only authority. Tradition, reason, and experience (Wesley's 'quadrilateral') all inform theology, with Scripture as first among equals. Church tradition has genuine authority but can be critiqued by Scripture.",
        key_texts: ["2 Tim 3:16", "Acts 15"],
        proponents: "John Wesley, Wesleyan tradition",
        notes: "Distinguished from Catholic view by maintaining Scripture's primacy. Distinguished from sola scriptura by giving tradition and reason formal (not just instrumental) authority."
      },
      {
        name: "Scripture + Tradition (Catholic)",
        spectrum: 70,
        tags: ["Catholic"],
        summary: "Divine Revelation comes through both Sacred Scripture and Sacred Tradition, both transmitted under the guidance of the Magisterium (teaching authority of the Church). The Magisterium alone authoritatively interprets both. The canon itself was determined by the Church.",
        key_texts: ["2 Thess 2:15", "1 Tim 3:15", "Matt 16:18–19"],
        proponents: "Council of Trent, Vatican I & II, Catholic Catechism",
        notes: "The three-legged stool of Scripture, Tradition, Magisterium. The deuterocanonical books (Apocrypha) are part of the Catholic canon, rejected by Protestants."
      },
      {
        name: "Scripture + Tradition (Orthodox)",
        spectrum: 85,
        tags: ["Eastern Orthodox"],
        summary: "Holy Scripture exists within Holy Tradition — Scripture is not above tradition but part of it. The ecumenical councils, liturgy, iconography, and consensus of the Fathers together constitute the living Tradition in which Scripture is properly understood. The Church is the pillar of truth.",
        key_texts: ["1 Tim 3:15", "Jude 3", "2 Thess 2:15"],
        proponents: "Eastern Orthodox churches, Greek Orthodox, Russian Orthodox",
        notes: "More holistic than Catholic view — less focus on a teaching Magisterium, more on the Spirit-guided consensus of the whole Church across time (sobornost)."
      },
      {
        name: "Liberal / Modernist Historical-Critical View",
        spectrum: 100,
        tags: ["Liberal", "Mainline Protestant", "Progressive"],
        summary: "The Bible is not a divine oracle dictated by God, but a deeply human library of texts reflecting Israel's and the early Church's evolving historical experiences of the divine. It contains cultural biases, historical inaccuracies, and conflicting theological perspectives. Authority is found not in the absolute inerrancy of the text, but in its ability to inspire moral transformation and point toward justice and love.",
        key_texts: ["2 Cor 3:6", "Luke 1:1–4"],
        proponents: "Friedrich Schleiermacher, Rudolf Bultmann, Marcus Borg, John Shelby Spong",
        notes: "Dominant in mainline Protestant academic circles since the late 19th century. Demythologizes supernatural events (like the virgin birth or physical resurrection) to focus on the ethical kernel of Jesus's teachings."
      }
    ]
  },
  {
    id: "gender",
    icon: "⚖️",
    title: "Gender, Sexuality & the Church",
    question: "What does Scripture teach about gender roles and sexual ethics?",
    views: [
      {
        name: "Complementarianism",
        spectrum: 0,
        tags: ["Reformed", "Southern Baptist", "Conservative Evangelical"],
        summary: "Men and women are equal in dignity and salvation but have complementary roles. In the home, the husband is the head; in the church, the offices of elder/pastor/overseer are restricted to qualified men. Women serve in many capacities but not in the authoritative teaching office.",
        key_texts: ["1 Tim 2:12–14", "1 Cor 14:34–35", "1 Tim 3:1–2", "Eph 5:22–24"],
        proponents: "Wayne Grudem, John Piper, CBMW",
        notes: "Spectrum within: 'soft comp' (only senior pastor restricted) to 'hard comp' (women may not teach mixed adult classes). The CBMW Danvers Statement (1987) is the foundational document."
      },
      {
        name: "Sacramental Complementarianism & Ascetic Equality",
        spectrum: 8,
        tags: ["Catholic", "Orthodox", "Patristic"],
        summary: "Maintains a strict creational gender binary and restricts the sacramental priesthood exclusively to men, as the priest acts in persona Christi (in the person of Christ). However, it rejects structural domestic subordination models seen in extreme Protestantism. Through monasticism and the calling of virginity, women are freed from patriarchal domesticity, achieving spiritual equality and institutional authority as Abbesses, Mother Superiors, and revered Saints.",
        key_texts: ["Gal 3:28", "Luke 10:41–42", "1 Cor 7:32–34"],
        proponents: "John Paul II (Ordinatio Sacerdotalis), Thomas Aquinas, John Chrysostom",
        notes: "Often misunderstood by Protestants because it pairs an unyielding ban on female ordination with a profound mystical elevation of women (especially the Virgin Mary/Theotokos). It views priesthood as a sacrificial burden rather than an exercise of political power."
      },
      {
        name: "Egalitarianism",
        spectrum: 20,
        tags: ["Evangelical", "Mainline Protestant", "CBE"],
        summary: "The Gospel restores the full equality of men and women in all roles including church leadership. Passages restricting women reflect cultural situations addressed by Paul, not timeless prescriptions. Women may serve as elders, pastors, and preachers.",
        key_texts: ["Gal 3:28", "Joel 2:28–29", "Rom 16:7", "Acts 18:26"],
        proponents: "CBE International, N.T. Wright, Gordon Fee, Scot McKnight",
        notes: "Not secular feminism — grounded in a specific hermeneutic of redemptive movement within Scripture (Webb) or re-reading the key passages in their cultural context."
      },
      {
        name: "Traditional Sexual Ethic (Side B)",
        spectrum: 35,
        tags: ["Catholic", "Orthodox", "Conservative Evangelical"],
        summary: "Same-sex sexual activity is prohibited by Scripture in all circumstances. However, same-sex attraction itself is not sinful — it is a temptation to be resisted, not an identity to be affirmed. Gay and lesbian Christians are called to celibacy. Often called 'Side B' in LGBTQ Christian discourse.",
        key_texts: ["Gen 2:24", "Lev 18:22", "Rom 1:26–27", "1 Cor 6:9–11"],
        proponents: "Sam Allberry, Wesley Hill",
        notes: "Wesley Hill's 'Spiritual Friendship' movement advocates deep covenantal same-sex friendships as a context for flourishing within celibacy. Rosaria Butterfield has disavowed this movement and the 'gay Christian' identifier in her recent work, explicitly drawing a harder conservative boundary line."
      },
      {
        name: "Reparative / Change Therapy View",
        spectrum: 50,
        tags: ["Conservative Evangelical", "Controversial", "Minority"],
        summary: "Same-sex attraction is a disordered condition that can be reduced or redirected through prayer, counseling, or therapy. Some proponents claim significant change in orientation is possible for some individuals. Sexual orientation is understood as fluid rather than fixed.",
        key_texts: ["1 Cor 6:11", "Rom 12:2"],
        proponents: "CHANGED movement, some conservative Catholic therapists",
        notes: "Exodus International closed in 2013 with its president publicly apologizing for harm caused. Most major psychological bodies (APA, AMA) consider attempts to change orientation ineffective and harmful. Distinct from Side B, which does not promise orientation change. Increasingly a minority position even among conservatives."
      },
      {
        name: "Celibacy-Optional / Revisionist Evangelical",
        spectrum: 65,
        tags: ["Progressive Evangelical", "Revisionist"],
        summary: "The biblical prohibitions address exploitative or idolatrous same-sex practices in the ancient world, not committed, monogamous same-sex relationships. A hermeneutic of redemptive movement within Scripture allows for affirming same-sex unions under the same framework as heterosexual marriage.",
        key_texts: ["Gen 2:18", "Ruth 1:16–17", "1 Sam 18:1–3", "Rom 1"],
        proponents: "Matthew Vines, Ken Wilson, David Gushee, James Brownson",
        notes: "Matthew Vines' God and the Gay Christian (2014) is the most widely read popular presentation. Critiqued by conservatives for special pleading and by progressives for still working within a broadly evangelical framework. The hermeneutical key is whether Paul's概 condemnations addressed orientation-based relationships or only exploitative ones."
      },
      {
        name: "Full Affirmation",
        spectrum: 80,
        tags: ["Mainline Protestant", "Progressive"],
        summary: "Same-sex relationships, marriage, and LGBTQ identity (including transgender identity) are fully affirmed as consistent with Christian faith and the trajectory of Scripture. The church should celebrate and bless same-sex marriages and ordain LGBTQ clergy without restriction.",
        key_texts: ["Gal 3:28", "Acts 10:28", "1 John 4:8"],
        proponents: "Nadia Bolz-Weber, Eugene Rogers",
        notes: "Now the official position of several mainline denominations. The United Methodist Church experienced a historic structural schism over this question. The affirming position draws on the church's history of moral development on slavery and women's ordination as precedent for reconsidering sexual ethics."
      },
      {
        name: "Transgender-Inclusive Theologies",
        spectrum: 100,
        tags: ["Progressive", "Academic", "Emerging"],
        summary: "Gender identity is not fixed by biological sex at birth. Transgender and non-binary identities are affirmed as valid expressions of human diversity and not contrary to Christian anthropology. Some theologians argue the biblical vision of 'male and female' is descriptive of diversity rather than prescriptive of rigid binary categories.",
        key_texts: ["Gen 1:27", "Gal 3:28", "Isa 56:3–5"],
        proponents: "Austen Hartke, Justin Sabia-Tanis, Virginia Ramey Mollenkott",
        notes: "The eunuch texts (Isa 56, Matt 19:12, Acts 8) are frequently cited as evidence that the Bible already envisions gender diversity beyond a strict binary. Conservative responses argue eunuchs are a category of biological sex variation, not gender identity. Most traditional and evangelical bodies reject transgender self-identification as contrary to creational design."
      }
    ]
  }
];

  

 		

const spectrumColors = [
  "#3b82f6", "#60a5fa", "#a78bfa", "#c084fc", "#f472b6", "#fb7185", "#f97316"
];

function getSpectrumColor(val) {
  const idx = Math.round((val / 100) * (spectrumColors.length - 1));
  return spectrumColors[idx];
}

export default function BiblicalViews() {
  const [activeCategory, setActiveCategory] = useState("hell");
  const [expandedView, setExpandedView] = useState(null);

  const cat = categories.find(c => c.id === activeCategory);

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "#0f0e0c",
      color: "#e8e2d6",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      margin: 0,
      padding: 0,
    }}>
      {/* Header */}
      <div style={{
        padding: "2rem 2rem 1rem",
        borderBottom: "1px solid #2a2620",
        background: "linear-gradient(180deg, #1a1714 0%, #0f0e0c 100%)",
      }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ fontSize: "0.7rem", letterSpacing: "0.25em", color: "#7c6e58", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Theological Cartography
          </div>
          <h1 style={{
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            fontWeight: "400",
            margin: 0,
            color: "#f0ead8",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}>
            A Survey of Biblical Views
          </h1>
          <p style={{ fontSize: "0.85rem", color: "#7c6e58", margin: "0.5rem 0 0", fontStyle: "italic" }}>
            The major positions on {categories.length} doctrinal questions
          </p>
        </div>
      </div>

      {/* Category Nav */}
      <div style={{
        overflowX: "auto",
        borderBottom: "1px solid #2a2620",
        background: "#13120f",
        flexShrink: 0,
      }}>
        <div style={{
          display: "flex",
          gap: 0,
          minWidth: "max-content",
          maxWidth: 900,
          margin: "0 auto",
        }}>
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => { setActiveCategory(c.id); setExpandedView(null); }}
              style={{
                background: activeCategory === c.id ? "#1e1b16" : "transparent",
                border: "none",
                borderBottom: activeCategory === c.id ? "2px solid #c9a84c" : "2px solid transparent",
                color: activeCategory === c.id ? "#f0ead8" : "#7c6e58",
                padding: "0.75rem 1rem",
                cursor: "pointer",
                fontSize: "0.78rem",
                fontFamily: "inherit",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.25rem",
                whiteSpace: "nowrap",
                transition: "all 0.15s",
                minWidth: 70,
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>{c.icon}</span>
              <span style={{ letterSpacing: "0.01em" }}>{c.title.split(" ").find(w => w.toLowerCase() !== "the")}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, maxWidth: 900, margin: "0 auto", width: "100%", padding: "1.5rem 1rem 3rem" }}>
        {/* Category Header */}
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.25rem" }}>
            <span style={{ fontSize: "1.8rem" }}>{cat.icon}</span>
            <h2 style={{ margin: 0, fontSize: "1.4rem", fontWeight: 400, color: "#f0ead8" }}>{cat.title}</h2>
          </div>
          <p style={{ margin: 0, color: "#7c6e58", fontSize: "0.9rem", fontStyle: "italic", paddingLeft: "2.55rem" }}>
            {cat.question}
          </p>
        </div>
        {/* Spectrum bar */}
        <div style={{ marginBottom: "1.5rem", paddingLeft: "2.55rem" }}>
          <div style={{
            height: 6,
            borderRadius: 3,
            background: "linear-gradient(90deg, #3b82f6, #a78bfa, #f472b6, #f97316)",
            position: "relative",
            marginBottom: "0.4rem",
          }}>
            {cat.views.map(v => (
              <div key={v.name} style={{
                position: "absolute",
                left: `${v.spectrum}%`,
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: getSpectrumColor(v.spectrum),
                border: "2px solid #0f0e0c",
                cursor: "pointer",
              }} title={v.name} />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.65rem", color: "#5a5040", letterSpacing: "0.05em" }}>
            <span>◀ MORE RESTRICTIVE</span>
            <span>MORE OPEN ▶</span>
          </div>
        </div>

        {/* Views */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {cat.views.map((view, i) => {
            const isOpen = expandedView === i;
            const col = getSpectrumColor(view.spectrum);
            return (
              <div
                key={view.name}
                style={{
                  background: "#16140f",
                  border: `1px solid ${isOpen ? col + "66" : "#2a2620"}`,
                  borderLeft: `3px solid ${col}`,
                  borderRadius: 6,
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                  cursor: "pointer",
                }}
                onClick={() => setExpandedView(isOpen ? null : i)}
              >
                <div style={{ padding: "1rem 1.2rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                      <span style={{ fontSize: "1rem", fontWeight: 600, color: "#f0ead8", letterSpacing: "-0.01em" }}>
                        {view.name}
                      </span>
                      {view.tags.map(t => (
                        <span key={t} style={{
                          fontSize: "0.6rem",
                          background: "#2a2620",
                          color: "#9c8a72",
                          padding: "0.1rem 0.4rem",
                          borderRadius: 2,
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                        }}>{t}</span>
                      ))}
                    </div>
                    <p style={{ margin: 0, fontSize: "0.85rem", color: "#a89880", lineHeight: 1.55 }}>
                      {view.summary}
                    </p>
                  </div>
                  <div style={{ color: "#5a5040", fontSize: "1.2rem", marginTop: "0.1rem", flexShrink: 0 }}>
                    {isOpen ? "▲" : "▼"}
                  </div>
                </div>

                {isOpen && (
                  <div style={{
                    padding: "0 1.2rem 1.2rem",
                    borderTop: "1px solid #2a2620",
                    marginTop: 0,
                  }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "1rem" }}>
                      <div>
                        <div style={{ fontSize: "0.65rem", letterSpacing: "0.12em", color: "#7c6e58", textTransform: "uppercase", marginBottom: "0.4rem" }}>Key Texts</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                          {view.key_texts.map(t => (
                            <span key={t} style={{
                              fontSize: "0.75rem",
                              background: "#1e1b16",
                              color: "#c9a84c",
                              padding: "0.2rem 0.5rem",
                              borderRadius: 3,
                              fontFamily: "monospace",
                              border: "1px solid #2a2620",
                            }}>{t}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div style={{ fontSize: "0.65rem", letterSpacing: "0.12em", color: "#7c6e58", textTransform: "uppercase", marginBottom: "0.4rem" }}>Proponents</div>
                        <p style={{ margin: 0, fontSize: "0.8rem", color: "#a89880", lineHeight: 1.5, fontStyle: "italic" }}>{view.proponents}</p>
                      </div>
                    </div>
                    {view.notes && (
                      <div style={{ marginTop: "0.85rem", padding: "0.65rem 0.85rem", background: "#1a1714", borderRadius: 4, borderLeft: `2px solid ${col}44` }}>
                        <div style={{ fontSize: "0.65rem", letterSpacing: "0.12em", color: "#7c6e58", textTransform: "uppercase", marginBottom: "0.3rem" }}>Notes</div>
                        <p style={{ margin: 0, fontSize: "0.8rem", color: "#9c8a72", lineHeight: 1.55 }}>{view.notes}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
