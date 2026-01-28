import React from "react";
import { useSelector } from "react-redux"; //TODO!! Task didn't specifically ask for useSelector, but an older example used it; make sure this is correct later
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
// import selector
//NOTE!! Because we're importing from a file in the same folder, we can just access it from "./[filename.xx]"
import { selectAllTopics } from './topicsSlice.js';

export default function Topics() {
  //A call to the selector to select all the topics in state
  const topics = useSelector(selectAllTopics);

  return (
    <section className="center">
      <h1>Topics</h1>
      <ul className="topics-list">
        {Object.values(topics).map((topic) => (
          <li className="topic" key={topic.id}>
          <Link to={ROUTES.topicRoute(topic.id)} className="topic-link">
           <div className="topic-container">
             <img src={topic.icon} alt="" />
             <div className="text-content">
               <h2>{topic.name}</h2>
               <p>{topic.quizIds.length} Quizzes</p>
             </div>
           </div>
         </Link>
          </li>
        ))}
      </ul>
      <Link
        to={ROUTES.newTopicRoute()}
        className="button create-new-topic-button"
      >
        Create New Topic
      </Link>
    </section>
  );
}
