import React from 'react'
import styles from './styles/OSSContainer.module.css'

export default function OSSContainer (props) {
    return (
        <div id="OSS">
            <h1 className="header-link">Open Source</h1>
            <div className={styles.container}>
                <div className={styles.copy}>
                    <div className={styles.copyheader}>
                        <h1 className={styles.OSSTitle}>@Pytorch/Ignite</h1>
                        <div className={styles.blurbbox}>
                            <p className={styles.blurb}>
                                Ignite is a High-level library to help with training and evaluating 
                                neural networks in PyTorch flexibly and transparently.
                                My involvement includes adding a new feature to the Engine, and improving type-checking.
                        </p>
                    </div>
                        </div>
                    <div className={styles.copytags}>
                        <ul className={styles.issueList}>
                            <PullRequestItem 
                                link={`https://github.com/pytorch/ignite/pull/1381`} 
                                issueNum={1381} 
                                item={`Adding Max-Iters as an optional args in Engine run`}
                            />
                            <PullRequestItem 
                                link={`https://github.com/pytorch/ignite/pull/1365`} 
                                issueNum={1365} 
                                item={`Added tuple type to mixin.py`}
                            />
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.copy}>
                    <div className={styles.copyheader}>
                        <h1 className={styles.OSSTitle}>@SnowpackJS/Snowpack</h1>
                        <div className={styles.blurbbox}>
                            <p className={styles.blurb}>
                                Snowpack is a WASM-powered frontend build tool. Fast, lightweight, unbundled ESM.
                                Here, I've added unit tests with Jest to some of their plugins.
                            </p>
                    </div>
                        </div>
                    <div className={styles.copytags}>
                        <ul className={styles.issueList}>
                            <PullRequestItem 
                                link={`https://github.com/snowpackjs/snowpack/pull/1399`} 
                                issueNum={1399} 
                                item={`Added test for preloadModules option`}
                            />
                            <PullRequestItem 
                                link={`https://github.com/snowpackjs/snowpack/pull/1357`} 
                                issueNum={1357} 
                                item={`Added Minimal Tests for plugin-postcss`}
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

function PullRequestItem(props) {
    return (
        <li className={styles.listcontainer}>
            <a href={props.link}>
                <span>#{props.issueNum}</span>
                <p>{props.item}</p>
            </a>
        </li>
    )
}
