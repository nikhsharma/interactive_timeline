import React, {Component} from 'react';

export default class RomanHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    console.log("Roman History mounted");
  }

  render() {
    return (
      <div className="historical_outline">
        <p>In historiography, ancient Rome is Roman civilization from the founding of the city of Rome in the 8th century BC to the collapse of the Western Roman Empire in the 5th century AD, encompassing the Roman Kingdom, Roman Republic and Roman Empire until the fall of the western empire. The term is sometimes used to refer only to the kingdom and republic periods, excluding the subsequent empire.</p>

        <p>The civilization began as an Italic settlement in the Italian peninsula, dating from the 8th century BC, that grew into the city of Rome and which subsequently gave its name to the empire over which it ruled and to the widespread civilisation the empire developed. The Roman empire expanded to become one of the largest empires in the ancient world, though still ruled from the city, with an estimated 50 to 90 million inhabitants (roughly 20% of the world's population[3]) and covering 5.0 million square kilometres at its height in AD 117.</p>

        <p>In its many centuries of existence, the Roman state evolved from a monarchy to a Classical Republic and then to an increasingly autocratic empire. Through conquest and assimilation, it eventually dominated the Mediterranean region, Western Europe, Asia Minor, North Africa, and parts of Northern and Eastern Europe. It is often grouped into classical antiquity together with ancient Greece, and their similar cultures and societies are known as the Greco-Roman world.</p>

        <p>Ancient Roman civilisation has contributed to modern government, law, politics, engineering, art, literature, architecture, technology, warfare, religion, language, and society. Rome professionalised and expanded its military and created a system of government called res publica, the inspiration for modern republics such as the United States and France. It achieved impressive technological and architectural feats, such as the construction of an extensive system of aqueducts and roads, as well as the construction of large monuments, palaces, and public facilities.</p>

        <p>By the end of the Republic (27 BC), Rome had conquered the lands around the Mediterranean and beyond: its domain extended from the Atlantic to Arabia and from the mouth of the Rhine to North Africa. The Roman Empire emerged with the end of the Republic and the dictatorship of Augustus Caesar. 721 years of Roman-Persian Wars started in 92 BC with their first war against Parthia. It would become the longest conflict in human history, and have major lasting effects and consequences for both empires. Under Trajan, the Empire reached its territorial peak. Republican mores and traditions started to decline during the imperial period, with civil wars becoming a prelude common to the rise of a new emperor. Splinter states, such as the Palmyrene Empire, would temporarily divide the Empire during the crisis of the 3rd century.</p>

        <p>Plagued by internal instability and attacked by various migrating peoples, the western part of the empire broke up into independent "barbarian" kingdoms in the 5th century. This splintering is a landmark historians use to divide the ancient period of universal history from the pre-medieval "Dark Ages" of Europe. The eastern part of the empire endured through the 5th century and remained a power throughout the "Dark Ages" and medieval times until its fall in 1453 AD. Though the citizens of the empire made no distinction, the empire is most commonly referred to as the "Byzantine Empire" by modern historians during the Middle Ages to differentiate between the state of antiquity and the nation it grew into.</p>

        <a href="https://en.wikipedia.org/wiki/Ancient_Rome">Source: Wikipedia</a>
      </div>
    )}
  }
