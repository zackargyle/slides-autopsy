/*
  - Internal Data Structures
  - Reconciliation
  - Events
  - Fiber
*/

import React from "react";
import {
  Appear,
  BlockQuote,
  Cite,
  Link,
  List,
  ListItem,
  Quote,
  CodePane,
  Deck,
  Heading,
  Image,
  Slide,
  Spectacle,
  Text
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';
import images from "./images";
import theme from "./theme";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");

/*
[2] Bio + Overview
[5] Story time
[10] Stages of an Autopsy
[5] Example: React
[2] Rant
[5] Q&A
[28]

node --debug-brk ./node_modules/.bin/jest --runInBand -- ReactDOMProduction
*/

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck theme={theme} transition={["fade"]} transitionDuration={200}>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              How to perform
            </Heading>
            <Heading size={1} fit caps lineHeight={1.2} textColor="black">
              A Library Autopsy
            </Heading>
            <Text caps lineHeight={3} textColor="tertiary">
              <b>Zack Argyle</b>
            </Text>
          </Slide>

          {/* INTRODUCTION */}

          <Slide>
            <Heading size={1} lineHeight={1} textColor="black">Hello 😆</Heading>
            <Text textColor="quartenary" style={{ display: 'inline' }}>I'm</Text>
            <Text textColor="tertiary" style={{ display: 'inline' }}> Zack.</Text>
            <Text textColor="quartenary" style={{ display: 'inline' }}>This is my family.</Text>
            <div>
              <Image src={images.halloween.replace("/", "")} margin="5% 0" width="40%"/>
            </div>
          </Slide>

          <Slide>
            <Heading size={1} caps lineHeight={1} textColor="black">
              Bio
            </Heading>
            <Text lineHeight={1} textColor="quartenary">
              Engineer. Husband. Father. Dungeon Master. Seattle raised. SF Based.
            </Text>
            <Image src={images.bio.replace("/", "")} margin="5% 0" width="60%"/>
            <Image src={images.suit.replace("/", "")} margin="6%" width="25%"/>
          </Slide>

          {/* Story Time */}

          <Slide>
            <Heading size={1} caps lineHeight={1}>
              Story Time
            </Heading>
            <Text>My first big open-source pull request</Text>
          </Slide>

          <Slide>
            <Heading size={1} fit lineHeight={1}>
                Accelerated Mobile Pages
            </Heading>
            <Text>~10k stars</Text>
            <Text>~300 contributors</Text>
          </Slide>

          <Slide>
            <Text>!!! Let's do this !!!</Text>
            <Image src={images.ash.ready.replace("/", "")} margin="5% 0" width="60%"/>
          </Slide>

          <Slide>
            <Heading size={1} fit lineHeight={1}>Submitted the Pull Request!</Heading>
            <List style={{ color: 'black' }}>
              <Appear><ListItem>1,119<sup>th</sup> PR to <b>ampproject/amphtml</b></ListItem></Appear>
              <Appear><ListItem>10 files changed</ListItem></Appear>
              <Appear><ListItem><span style={{ color: 'green' }}>+672</span> / <span style={{ color: 'red' }}>-484</span></ListItem></Appear>
            </List>
            <Appear>
              <div>
                <Heading size={1} fit lineHeight={1}>
                    Oh, crap
                </Heading>
                <Text><b>32</b> requested changes...</Text>
              </div>
            </Appear>
          </Slide>

          <Slide>
            <Text>I want my mommy...</Text>
            <Image src={images.ash.sad.replace("/", "")} margin="5% 0" width="60%"/>
          </Slide>

          <Slide>
            <Text>I forgot to finish the autopsy.</Text>
          </Slide>

          {/* Stages of an Autopsy */}

          <Slide notes={`
            Go watch the walking dead if you want descriptive
          `}>
            <Heading size={1} fit lineHeight={1}>
                Stages of an Autopsy
            </Heading>
            <List ordered style={{ color: 'black' }}>
              <ListItem>External Examination</ListItem>
              <ListItem>Blood Sample</ListItem>
              <ListItem>Y-Incision</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={1} fit lineHeight={1}>
                External Examination
            </Heading>
            <Appear><Text>#1 reason your PR won't be accepted?</Text></Appear>
            <Appear><Text>Code style/formatting.</Text></Appear>
          </Slide>

          <Slide>
            <Heading size={1} fit lineHeight={1}>
                Look for conventions
            </Heading>
            <List style={{ color: 'black' }}>
              <ListItem>Folder and file paths/naming/etc</ListItem>
              <ListItem>Dependency management (cjs, amd, es6)</ListItem>
              <ListItem>ES5 or ES6+</ListItem>
              <ListItem>Where do tests/mocks live?</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={1} fit lineHeight={1}>
                Blood Samples
            </Heading>
            <Appear><Text>How does this stuff run?</Text></Appear>
          </Slide>

          <Slide>
            <Heading size={1} fit lineHeight={1}>
                package.json
            </Heading>
            <List style={{ color: 'black' }}>
              <ListItem>How to run tests</ListItem>
              <ListItem>How to run linters</ListItem>
              <ListItem>How to run development server</ListItem>
            </List>
            <Appear><Text bold>node --debug-brk AND node-inspector</Text></Appear>
          </Slide>

          <Slide>
            <Heading size={1} fit lineHeight={1}>
                Y-Incision
            </Heading>
            <Appear><Text bold>Dig into the guts</Text></Appear>
            <Appear><Text>That's as far as that metaphor will go...</Text></Appear>
          </Slide>

          <Slide>
            <Heading size={1} fit lineHeight={1}>
                Clone the repo, right now
            </Heading>
            <List style={{ color: 'black' }}>
              <Appear><ListItem>Github search is the worst</ListItem></Appear>
              <Appear><ListItem>Static page navigation is slow</ListItem></Appear>
              <Appear><ListItem>Run tests and dev environment early</ListItem></Appear>
            </List>
          </Slide>

          {/* Example: React */}

          <Slide>
            <Text>!!! We're ready to fly !!!</Text>
            <Image src={images.spongebob.ready.replace("/", "")} margin="5% 0" width="60%"/>
          </Slide>

          <Slide notes={`
            <ol>
              <li>Search setState in /src, *-test.js</li>
              <li>Notice buggy code in ReactUpdateQueue</li>
              <li>Async for things like componentWillMount</li>
              <li>_pendingStateQueue, _processPendingState, mountComponent/updateComponent</li>
            </ol>
          `}>
            <Image src={images.react.replace("/", "")} margin="5% 0" width="60%"/>
          </Slide>

          <Slide notes={`
            <ol>
              <li>Tie back to amphtml</li>
              <li>Imposter syndrome; it's intimidating, but you can do it</li>
              <li>Playstation day 1, bug fix in an hour</li>
              <li>Find an advocate to help you. Michelle story.</li>
            </ol>
          `}>
            <Heading size={1} fit lineHeight={1}>{'<Rant>'}</Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit lineHeight={1}>{'</Rant>'}</Heading>
          </Slide>


          {/* Q&A */}

          <Slide>
            <Heading size={1} caps lineHeight={1}>
              Q&A
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit lineHeight={1}>
                Keep in touch!
            </Heading>
            <Text>zackargyle</Text>
            <Link href="https://twitter.com/zackargyle">
              <Image src={images.icon.twitter.replace("/", "")} width="10%" style={{ padding: 10 }} />
            </Link>
            <Link href="https://medium.com/@zackargyle/">
              <Image src={images.icon.medium.replace("/", "")} width="10%" style={{ padding: 10 }} />
            </Link>
            <Link href="https://github.com/zackargyle/">
              <Image src={images.icon.github.replace("/", "")} width="10%" style={{ padding: 10 }} />
            </Link>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
