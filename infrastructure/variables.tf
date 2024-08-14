variable "repository_name" {
  description = "Plugin repository name"
  type        = string
}

variable "version_tag" {
  description = "Plugin version tag (e.g. v1)"
  type        = string
}

variable "region" {
  description = "The AWS region"
  type        = string
  default     = "eu-central-1"
}

variable "memory_size" {
  description = "The memory size"
  type        = number
  default     = 128
}

variable "timeout" {
  description = "The timeout"
  type        = number
  default     = 30
}