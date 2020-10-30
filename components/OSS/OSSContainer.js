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
                            This is an example of some blurb that I'm just going to toss up into you. Enjoy!
                            Muahahaha...
                            This is an example of some blurb that I'm just going to toss up into you. Enjoy!
                            Muahahaha...
                            This is an example of some blurb that I'm just going to toss up into you. Enjoy!
                            Muahahaha...
                        </p>
                    </div>
                        </div>
                    <div className={styles.copytags}>
                        <ul className={styles.issueList}>
                            <PullRequestItem 
                                link={`https://www.google.com`} 
                                issueNum={1343} 
                                item={`Adding Max-Iters as Optional Args in Run`}
                            />
                            <PullRequestItem 
                                link={`https://www.google.com`} 
                                issueNum={1343} 
                                item={`Adding Max-Iters as Optional Args in Run`}
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
                            This is an example of some blurb that I'm just going to toss up into you. Enjoy!
                            Muahahaha...
                            This is an example of some blurb that I'm just going to toss up into you. Enjoy!
                            Muahahaha...
                            This is an example of some blurb that I'm just going to toss up into you. Enjoy!
                            Muahahaha...
                        </p>
                    </div>
                        </div>
                    <div className={styles.copytags}>
                        <ul className={styles.issueList}>
                            <PullRequestItem 
                                link={`https://www.google.com`} 
                                issueNum={1343} 
                                item={`Adding Max-Iters as Optional Args in Run`}
                            />
                            <PullRequestItem 
                                link={`https://www.google.com`} 
                                issueNum={1343} 
                                item={`Adding Max-Iters as Optional Args in Run`}
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