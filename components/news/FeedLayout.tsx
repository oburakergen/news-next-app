import { Card, Feed, FeedItem } from "@/components/core";

const FeedLayout = () => {
  return (
    <Feed className="feed">
      <FeedItem>
        <Card></Card>
      </FeedItem>
      <FeedItem>
        <Card>asdasdasdasd</Card>
      </FeedItem>
      <FeedItem>
        <Card>asdasdasdasd</Card>
      </FeedItem>
      <FeedItem>
        <Card>asdasdasdasd</Card>
      </FeedItem>
      <FeedItem>
        <Card>asdasdasdasd</Card>
      </FeedItem>
    </Feed>
  );
};

export default FeedLayout;
