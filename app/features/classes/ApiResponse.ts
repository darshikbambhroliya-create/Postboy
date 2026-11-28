export class ApiResponse<T> {
  public success: true = true;
  public statusCode: number;
  public message: string;
  public data: T;

  constructor(statusCode: number, data: T, message = "Success") {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }

  static success<T>(data: T, message = "Success") {
    return {
      success: true as const,
      statusCode: 200,
      message,
      data,
    };
  }

  static created<T>(data: T, message = "Created Successfully") {
    return {
      success: true as const,
      statusCode: 200,
      message,
      data,
    };
  }

  static updated<T>(data: T, message = "Updated Successfully") {
    return {
      success: true as const,
      statusCode: 200,
      message,
      data,
    };
  }

  static deleted(message = "Deleted Successfully") {
    return {
      success: true as const,
      statusCode: 200,
      message,
    };
  }

  static find<T>(data: T, message = "Found Successfully") {
    return {
      success: true as const,
      statusCode: 200,
      message,
      data,
    };
  }
}

// Error response type
export type ApiFailure = {
  success: false;
  statusCode: number;
  message: string;
  errors: unknown[];
};

export type ApiResult<T> = ApiResponse<T> | ApiFailure;
