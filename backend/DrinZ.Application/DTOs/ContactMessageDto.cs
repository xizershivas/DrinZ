namespace DrinZ.Application.DTOs;

public record ContactMessageDto(
    string Name,
    string Email,
    string Subject,
    string Message
);
