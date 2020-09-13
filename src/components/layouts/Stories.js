import React from "react";
import timeago from "epoch-timeago";
import Upvote from "./Upvote";
import CommentUnderPost from "./CommentUnderPost";
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom'
import CommentForm from "./CommentForm";
import {Button} from "react-bootstrap";
import {useAuth0} from "@auth0/auth0-react";

const Stories = ({ state }) => {
  const { user } = useAuth0();
  return (
    <>
      {state.map(
        ({ item, author, title, score, comments_count, time, url }) => (
          <tr key={item}>
            <td style={{ padding: "0px" }}>
              <i
               
                style={{
                  fontSize: "30px",
                  marginTop: "16px",
                  padding: "0px",
                  marginRight: "0px",
                
                }}
              />
            </td>
            <td
              style={{
                padding: "0px",
                color: "#828282"
              }}
            >
              &nbsp;
              {score}
            </td>
            <td >
              <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
              
              </a>
              

            </td>
            
            <React.Fragment className="info">
              <td style={{ color: "#black" }}>
                <i  />{" "}
                <a
                  href={`https://news.ycombinator.com/user?id=${author}`}
                  target="_blank"
                  style={{ color: "#black" }}
                  rel="noopener noreferrer"
                >
                  {author}
                </a>
              </td>
              <td style={{ color: "#black" }}>
                <i />{" "}
                <a
                  href={`https://${
                    url
                      .replace("http://", "")
                      .replace("https://", "")
                      .split(/[/?#]/)[0]
                  }`}
                  target="_blank"
                  style={{ color: "#828282" }}
                  rel="noopener noreferrer"
                >
                  {url
                    .replace("http://", "")
                    .replace("https://", "")
                    .split(/[/?#]/)[0]
                    .replace("www.", "")}
                </a>
              </td>
              <td style={{ color: "#828282" }}>
                <i > {timeago(time * 1000)}</i>
              </td>
              <td style={{ color: "#828282" }}>
                <i />{" "}
                <a
                  href={`https://news.ycombinator.com/item?id=${item}`}
                  target="_blank"
                  style={{ color: "#828282" }}
                  rel="noopener noreferrer"
                >
                  {comments_count}
                </a>
              </td>
              <Upvote />
              { user ? <CommentUnderPost/> : null }
            </React.Fragment>
          </tr>
        )
      )}
    </>
  );
};
export default Stories;
