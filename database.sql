USE [master]
GO
/****** Object:  Database [SaasApp]    Script Date: 2/12/2018 11:12:01 PM ******/
CREATE DATABASE [SaasApp]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'SaasApp', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.MSSQLSERVER\MSSQL\DATA\SaasApp.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'SaasApp_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.MSSQLSERVER\MSSQL\DATA\SaasApp_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [SaasApp] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [SaasApp].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [SaasApp] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [SaasApp] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [SaasApp] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [SaasApp] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [SaasApp] SET ARITHABORT OFF 
GO
ALTER DATABASE [SaasApp] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [SaasApp] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [SaasApp] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [SaasApp] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [SaasApp] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [SaasApp] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [SaasApp] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [SaasApp] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [SaasApp] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [SaasApp] SET  ENABLE_BROKER 
GO
ALTER DATABASE [SaasApp] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [SaasApp] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [SaasApp] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [SaasApp] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [SaasApp] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [SaasApp] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [SaasApp] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [SaasApp] SET RECOVERY FULL 
GO
ALTER DATABASE [SaasApp] SET  MULTI_USER 
GO
ALTER DATABASE [SaasApp] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [SaasApp] SET DB_CHAINING OFF 
GO
ALTER DATABASE [SaasApp] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [SaasApp] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [SaasApp] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'SaasApp', N'ON'
GO
ALTER DATABASE [SaasApp] SET QUERY_STORE = OFF
GO
USE [SaasApp]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [SaasApp]
GO
/****** Object:  Schema [utility]    Script Date: 2/12/2018 11:12:02 PM ******/
CREATE SCHEMA [utility]
GO
/****** Object:  Table [dbo].[__MigrationHistory]    Script Date: 2/12/2018 11:12:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__MigrationHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ContextKey] [nvarchar](300) NOT NULL,
	[Model] [varbinary](max) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK_dbo.__MigrationHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC,
	[ContextKey] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetRoles]    Script Date: 2/12/2018 11:12:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetRoles](
	[Id] [nvarchar](128) NOT NULL,
	[Name] [nvarchar](256) NOT NULL,
 CONSTRAINT [PK_dbo.AspNetRoles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserClaims]    Script Date: 2/12/2018 11:12:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [nvarchar](128) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_dbo.AspNetUserClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserLogins]    Script Date: 2/12/2018 11:12:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserLogins](
	[LoginProvider] [nvarchar](128) NOT NULL,
	[ProviderKey] [nvarchar](128) NOT NULL,
	[UserId] [nvarchar](128) NOT NULL,
 CONSTRAINT [PK_dbo.AspNetUserLogins] PRIMARY KEY CLUSTERED 
(
	[LoginProvider] ASC,
	[ProviderKey] ASC,
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserRoles]    Script Date: 2/12/2018 11:12:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserRoles](
	[UserId] [nvarchar](128) NOT NULL,
	[RoleId] [nvarchar](128) NOT NULL,
 CONSTRAINT [PK_dbo.AspNetUserRoles] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUsers]    Script Date: 2/12/2018 11:12:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUsers](
	[Id] [nvarchar](128) NOT NULL,
	[FirstName] [nvarchar](100) NULL,
	[LastName] [nvarchar](100) NULL,
	[JoinDate] [datetime] NOT NULL,
	[Email] [nvarchar](256) NULL,
	[EmailConfirmed] [bit] NOT NULL,
	[PasswordHash] [nvarchar](max) NULL,
	[SecurityStamp] [nvarchar](max) NULL,
	[PhoneNumber] [nvarchar](max) NULL,
	[PhoneNumberConfirmed] [bit] NOT NULL,
	[TwoFactorEnabled] [bit] NOT NULL,
	[LockoutEndDateUtc] [datetime] NULL,
	[LockoutEnabled] [bit] NOT NULL,
	[AccessFailedCount] [int] NOT NULL,
	[UserName] [nvarchar](256) NOT NULL,
 CONSTRAINT [PK_dbo.AspNetUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_AppSettings]    Script Date: 2/12/2018 11:12:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_AppSettings](
	[SettingsID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NULL,
	[Value] [nvarchar](255) NULL,
	[ActiveYN] [bit] NULL,
	[CreatedBy] [nvarchar](255) NOT NULL,
	[CreatedTimeStamp] [datetime] NULL,
	[UpdatedBy] [nvarchar](255) NOT NULL,
	[UpdatedTimeStamp] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[SettingsID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [utility].[tbl_ProcedureLog]    Script Date: 2/12/2018 11:12:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [utility].[tbl_ProcedureLog](
	[LogDate] [smalldatetime] NOT NULL,
	[DatabaseID] [int] NULL,
	[ObjectID] [int] NULL,
	[ProcedureName] [nvarchar](400) NULL,
	[ErrorLine] [int] NULL,
	[ErrorMessage] [nvarchar](max) NULL,
	[SeverityID] [int] NULL,
	[StateID] [int] NULL,
	[AdditionalInfo] [nvarchar](max) NULL,
	[UserID] [int] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [RoleNameIndex]    Script Date: 2/12/2018 11:12:02 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [RoleNameIndex] ON [dbo].[AspNetRoles]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_UserId]    Script Date: 2/12/2018 11:12:02 PM ******/
CREATE NONCLUSTERED INDEX [IX_UserId] ON [dbo].[AspNetUserClaims]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_UserId]    Script Date: 2/12/2018 11:12:02 PM ******/
CREATE NONCLUSTERED INDEX [IX_UserId] ON [dbo].[AspNetUserLogins]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_RoleId]    Script Date: 2/12/2018 11:12:02 PM ******/
CREATE NONCLUSTERED INDEX [IX_RoleId] ON [dbo].[AspNetUserRoles]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_UserId]    Script Date: 2/12/2018 11:12:02 PM ******/
CREATE NONCLUSTERED INDEX [IX_UserId] ON [dbo].[AspNetUserRoles]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UserNameIndex]    Script Date: 2/12/2018 11:12:02 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [UserNameIndex] ON [dbo].[AspNetUsers]
(
	[UserName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[tbl_AppSettings] ADD  DEFAULT (getdate()) FOR [CreatedTimeStamp]
GO
ALTER TABLE [dbo].[tbl_AppSettings] ADD  DEFAULT (getdate()) FOR [UpdatedTimeStamp]
GO
ALTER TABLE [utility].[tbl_ProcedureLog] ADD  DEFAULT (getdate()) FOR [LogDate]
GO
ALTER TABLE [dbo].[AspNetUserClaims]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserClaims_dbo.AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserClaims] CHECK CONSTRAINT [FK_dbo.AspNetUserClaims_dbo.AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserLogins]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserLogins_dbo.AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserLogins] CHECK CONSTRAINT [FK_dbo.AspNetUserLogins_dbo.AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_dbo.AspNetUserRoles_dbo.AspNetUsers_UserId]
GO
/****** Object:  StoredProcedure [dbo].[sp_AppSettingsGetByName]    Script Date: 2/12/2018 11:12:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-------------------------------------
-- CREATE VIEWS
-------------------------------------

-------------------------------------
-- CREATE FUNCTIONS
-------------------------------------

-------------------------------------
-- CREATE PROCS
-------------------------------------
CREATE PROCEDURE [dbo].[sp_AppSettingsGetByName]
(
	@Name VARCHAR(255)
)
AS
--------------------------------------------------------
-- NOTES: 
-- EXEC dbo.sp_APPSettingsGetByName 'ANGULAR_CHANGE_PASSWORD_URL'
--------------------------------------------------------

SET NOCOUNT ON
-------------------------------------
EXEC utility.sp_LogProcedureCall @ObjectID = @@PROCID;
-------------------------------------
BEGIN
	SELECT 
		SettingsID
		,Name
		,Value
	 FROM 
		dbo.tbl_APPSettings
	WHERE
		Name = @Name

END

GO
/****** Object:  StoredProcedure [utility].[sp_LogProcedureCall]    Script Date: 2/12/2018 11:12:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-------------------------------------
-- CREATE PROCS
-------------------------------------
CREATE PROCEDURE [utility].[sp_LogProcedureCall]
(
	 @ObjectID       INT,
	 @DatabaseID     INT = NULL,
	 @AdditionalInfo NVARCHAR(MAX) = NULL,
	 @UserID		 INT = NULL
)
AS
SET NOCOUNT ON;
BEGIN
	
	-------------------------------------
	-- DECLARE
	-------------------------------------	
	DECLARE @ProcedureName NVARCHAR(400)
  
	SELECT	@DatabaseID = COALESCE(@DatabaseID, DB_ID()),
			@ProcedureName = COALESCE
			  (
			   QUOTENAME(DB_NAME(@DatabaseID)) + '.'
			   + QUOTENAME(OBJECT_SCHEMA_NAME(@ObjectID, @DatabaseID)) 
			   + '.' + QUOTENAME(OBJECT_NAME(@ObjectID, @DatabaseID)),
			   ERROR_PROCEDURE()
			  );
 
	 INSERT utility.tbl_ProcedureLog
	 (
		  DatabaseID,
		  ObjectID,
		  ProcedureName,
		  ErrorLine,
		  ErrorMessage,
		  SeverityID,
		  StateID,
		  AdditionalInfo,
		  UserID
	 )
	 SELECT
		  @DatabaseID,
		  @ObjectID,
		  @ProcedureName,
		  ERROR_LINE(),
		  ERROR_MESSAGE(),
		  ERROR_SEVERITY(),
		  ERROR_STATE(),
		  @AdditionalInfo,
		  @UserID
END

GO
/****** Object:  StoredProcedure [utility].[sp_RaiseError]    Script Date: 2/12/2018 11:12:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-------------------------------------
-------------------------------------
CREATE PROC [utility].[sp_RaiseError]
AS
BEGIN
	
	DECLARE @ErrorMessage NVARCHAR(MAX) = ERROR_MESSAGE()
    DECLARE @ErrorSeverity INT = ERROR_SEVERITY()
    DECLARE @ErrorState INT = ERROR_STATE()
    
    RAISERROR (@ErrorMessage, -- Message text.
               @ErrorSeverity, -- Severity.
               @ErrorState -- State.
               )
END

GO
USE [master]
GO
ALTER DATABASE [SaasApp] SET  READ_WRITE 
GO
