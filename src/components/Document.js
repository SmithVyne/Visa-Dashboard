import React from 'react';
import {formatDistanceToNowStrict} from 'date-fns';

export default function Document({document: {status_at}}) {
    const date = formatDistanceToNowStrict(new Date(status_at), {addSuffix: true, unit: "day"});
    return (
        <span className="cell">
            <span className="document-card">
                {status_at}
                <span className="days-ago">{date}</span>
            </span>
        </span>
    )
}
