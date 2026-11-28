"use server";
import { prisma } from "@/lib/db";
import { MEMBER_ROLE } from "@/lib/generated/prisma/enums";
import currentUser from "../../authentication/actions";
import { ApiError } from "../../classes/ApiError";
import { ApiResponse, type ApiResult } from "../../classes/ApiResponse";
function handleError(error: unknown, fallbackMessage: string) {
  if (error instanceof ApiError) {
    return {
      success: false as const,
      statusCode: error.statusCode,
      message: error.message,
      errors: error.errors,
    };
  }
  console.error(fallbackMessage, error);
  return {
    success: false as const,
    statusCode: 500,
    message: fallbackMessage,
    errors: [],
  };
}
type InitializedWorkspace = Awaited<ReturnType<typeof prisma.workspace.upsert>>;
export async function initializeWorkspace(): Promise<
  ApiResult<InitializedWorkspace>
> {
  const owner = await currentUser();
  if (!owner) {
    throw ApiError.unauthorized("Please Login First");
  }
  try {
    const PersonalWorkspace = await prisma.workspace.upsert({
      where: {
        name_ownerId: {
          name: "Personal Workspace",
          ownerId: owner.id,
        },
      },
      update: {},
      create: {
        name: "Personal Workspace",
        description: "default workspace for use",
        owner: {
          connect: {
            id: owner.id,
          },
        },
        Member: {
          create: {
            user: {
              connect: {
                id: owner.id,
              },
            },
            role: MEMBER_ROLE.ADMIN,
          },
        },
      },
      include: {
        Member: true,
      },
    });
    return ApiResponse.success(PersonalWorkspace, "Workspace Created");
  } catch (error) {
    return handleError(error, "Failed to initialize workspace");
  }
}

export async function getWorkspace() {
  try {
    const user = await currentUser();
    if (!user) {
      throw ApiError.unauthorized("Please login first");
    }
    const AllWorkspace = await prisma.workspace.findMany({
      where: {
        OR: [{ ownerId: user.id }, { Member: { some: { userId: user.id } } }],
      },
      orderBy: { createdAt: "asc" },
    });
    return ApiResponse.success(AllWorkspace, "Workspaces fetched successfully");
  } catch (error) {
    return handleError(error, "Failed to initialize workspace");
  }
}

export async function CreateWorkSpace(name: string) {
  try {
    const user = await currentUser();
    if (!user) {
      throw ApiError.unauthorized("please login first");
    }
    const NewWorkspace = await prisma.workspace.create({
      data: {
        name: name,
        ownerId: user.id,
        Member: {
          create: {
            userId: user.id,
            role: MEMBER_ROLE.ADMIN,
          },
        },
      },
    });
    return ApiResponse.success(NewWorkspace, "Workspace Created");
  } catch (error) {
    return handleError(error, "Failed to initialize workspace");
  }
}

export async function getWorkspaceById(id: string) {
  try {
    const workspace = await prisma.workspace.findUnique({
      where: {
        id: id,
      },
      include: {
        Member: true,
      },
    });
    if (!workspace) {
      throw ApiError.notFound("Workspace is not created");
    }
    return ApiResponse.find(workspace, "Workspace is founded");
  } catch (error) {
    return handleError(error, "Failed to initialize workspace");
  }
}
