terraform {
  backend "s3" {}
}

module "plugin-on-aws-lambda" {
  source = "github.com/connery-io/plugin-on-aws-lambda?ref=main"

  plugin_name    = "fixed-response"
  plugin_version = "v1"
}