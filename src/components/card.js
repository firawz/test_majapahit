import React from 'react';
import { Card, Button } from 'react-bootstrap';

export function CardComponent({ post }) {
    console.log(post);
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{post.userId}</Card.Title>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.body}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
