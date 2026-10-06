# Smart-Attendance-and-Leave-Portal-
Smart Attendance and Leave Portal using AWS Serverless Architecture and CloudFormation IaC.
# Smart Attendance and Leave Portal

## Project Overview

Smart Attendance and Leave Portal is a serverless web application
developed using AWS services.

## AWS Services Used

- Amazon S3
- AWS Lambda
- Amazon DynamoDB
- AWS IAM
- AWS CloudFormation

## Architecture

The frontend is hosted on Amazon S3.
API requests are handled by AWS Lambda.
Attendance, user and leave data are stored in DynamoDB.
IAM provides permissions to Lambda.
CloudFormation manages the infrastructure as code.

## DynamoDB Tables

1. SmartAttendance-Users
2. SmartAttendance-Attendance
3. SmartAttendance-LeaveRequests

## Project Flow

Student/Faculty/Admin
        ↓
Amazon S3
        ↓
AWS Lambda
        ↓
Amazon DynamoDB

## Infrastructure as Code

AWS resources are deployed and managed using
AWS CloudFormation.

## Project Result

A scalable and serverless Smart Attendance and Leave
Management Portal.
