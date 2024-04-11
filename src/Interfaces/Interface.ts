export interface SubmissionData {
  description: string;
  hyperlink: string;
  mediaUrl: string;
  placeholderUrl: string;
  thumbnail: string;
  title: string;
}

export interface CreatorData {
  handle: string;
  name: string;
  pic: string;
}
export interface VideoDataType {
  postId: string;
  description: string;
  hyperlink: string;
  mediaUrl: string;
  placeholderUrl: string;
  thumbnail: string;
  title: string;
  submission: SubmissionData;
  creator: CreatorData;
}
