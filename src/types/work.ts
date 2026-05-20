export type WorkStatus = "draft" | "published";
export type Work = {
  title: string;
  category: string;
  summary: string;
  status: WorkStatus;
  url?: string;
};
