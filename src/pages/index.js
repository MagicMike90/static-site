import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div>
      <h1>Home</h1>
      <p>Choose an article category</p>
      <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
        <h1>Richard Hamming on Luck</h1>
        <div>
          <p>
            From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
              You and Your Research
            </a>”.
          </p>
          <blockquote>
            <p>
              There is indeed an element of luck, and no, there isn’t. The
              prepared mind sooner or later finds something important and does
              it. So yes, it is luck.{' '}
              <em>
                The particular thing you do is luck, but that you do something
                is not.
              </em>
            </p>
          </blockquote>
        </div>
        <p>Posted April 09, 2011</p>
      </div>
      <ul>
        <li>
          <Link to="/global/">Global</Link>
        </li>
        <li>
          <Link to="/local/">Local</Link>
        </li>

        <li>
          <Link to="/sports/">Sports</Link>
        </li>

        <div>
          <Link to="/counter/">Counter</Link>
        </div>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
