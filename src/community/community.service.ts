import { Injectable, NotFoundException } from "@nestjs/common";
import { Community } from "src/entities/community.entity";

@Injectable()
export class CommunityService {
  private community: Community[] = [
    {
      userId: 1,
      userName: "권능",
      comment: "오늘은 하루 쉬겠습니다.",
      createdAt: "2022년 9월 9일",
      updatedAt: "2022년 9월 9일",
    },
    {
      userId: 2,
      userName: "성호",
      comment: "오늘 가슴운동 너무 쉬운데요?",
      createdAt: "2022년 9월 9일",
      updatedAt: "2022년 9월 9일",
    },
    {
      userId: 3,
      userName: "본훈",
      comment: "오늘 닭가슴살 안먹는다.",
      createdAt: "2022년 9월 9일",
      updatedAt: "2022년 9월 9일",
    },
    {
      userId: 4,
      userName: "마루",
      comment: "오늘은 하체 하는 날이에요~",
      createdAt: "2022년 9월 9일",
      updatedAt: "2022년 9월 9일",
    },
  ];

  getAllPost(): Community[] {
    return this.community;
  }

  getOnePost(id: string): Community {
    const userCommunity = this.community.find(
      (community) => community.userId === +id,
    );

    if (!userCommunity) {
      throw new NotFoundException(`등록된 게시글이 없습니다`);
    }

    return userCommunity;
  }

  addPost(postData) {
    this.community.push({
      ...postData,
    });
  }
}
