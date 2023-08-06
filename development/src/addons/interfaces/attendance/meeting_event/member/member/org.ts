import { BranchIDModel, ClientIDModel, MemberCategoryIDModel } from "../../schedules/categories";

export class OrganizationMemberModel {
  id: number;
  clientId: ClientIDModel | number;
  organizationName: string;
  contactPersonName: string;
  organizationType: OrganizationTypeModel;
  businessRegistered: boolean;
  organizationPhone: string;
  organizationEmail: string;
  contactPersonGender: number;
  contactPersonPhoto: string;
  dateOfIncorporation: string;
  logo: string;
  contactPersonPhone: string;
  contactPersonEmail: string;
  countryOfBusiness: string;
  stateProvince: string;
  region: number;
  district: number;
  constituency: number;
  electoralArea: number;
  community: string;
  digitalAddress: string;
  level: number;
  status: number;
  accountType: number;
  memberType: number;
  date: string;
  last_login: string;
  referenceId: string;
  branchId: number;
  editable: boolean;
  updatedBy: number;
  updateDate: string;
  updatedByInfo: any;
  branchInfo: BranchIDModel;
  categoryInfo: MemberCategoryIDModel;
  certificates: CertificateModel[];
  identification: string;

  static fromJson(json: any): OrganizationMemberModel {
    const model = new OrganizationMemberModel();
    model.id = json.id;
    model.clientId = Number.isNaN(json.clientId) ? ClientIDModel.fromJson(json.clientId) : Number(json.clientId);
    model.organizationName = json.organizationName;
    model.contactPersonName = json.contactPersonName;
    model.organizationType = OrganizationTypeModel.fromJson(json.organizationType);
    model.businessRegistered = json.businessRegistered;
    model.organizationPhone = json.organizationPhone;
    model.organizationEmail = json.organizationEmail;
    model.contactPersonGender = json.contactPersonGender;
    model.contactPersonPhoto = json.contactPersonPhoto;
    model.dateOfIncorporation = json.dateOfIncorporation;
    model.logo = json.logo;
    model.contactPersonPhone = json.contactPersonPhone;
    model.contactPersonEmail = json.contactPersonEmail;
    model.countryOfBusiness = json.countryOfBusiness;
    model.stateProvince = json.stateProvince;
    model.region = json.region;
    model.district = json.district;
    model.constituency = json.constituency;
    model.electoralArea = json.electoralArea;
    model.community = json.community;
    model.digitalAddress = json.digitalAddress;
    model.level = json.level;
    model.status = json.status;
    model.accountType = json.accountType;
    model.memberType = json.memberType;
    model.date = json.date;
    model.last_login = json.last_login;
    model.referenceId = json.referenceId;
    model.branchId = json.branchId;
    model.editable = json.editable;
    model.updatedBy = json.updatedBy;
    model.updateDate = json.updateDate;
    model.updatedByInfo = json.updatedByInfo;
    model.branchInfo = BranchIDModel.fromJson(json.branchInfo);
    model.categoryInfo = MemberCategoryIDModel.fromJson(json.categoryInfo);
    model.certificates = json.certificates === null? []: json.certificates.map((certificate: any) =>
      CertificateModel.fromJson(certificate)
    );
    model.identification = json.identification;
    return model;
  }

  toJson(): any {
    return {
      id: this.id,
      //@ts-ignore
      clientId: Number.isNaN(this.clientId) ? this.clientId.toJson() : this.clientId,
      organizationName: this.organizationName,
      contactPersonName: this.contactPersonName,
      organizationType: this.organizationType.toJson(),
      businessRegistered: this.businessRegistered,
      organizationPhone: this.organizationPhone,
      organizationEmail: this.organizationEmail,
      contactPersonGender: this.contactPersonGender,
      contactPersonPhoto: this.contactPersonPhoto,
      dateOfIncorporation: this.dateOfIncorporation,
      logo: this.logo,
      contactPersonPhone: this.contactPersonPhone,
      contactPersonEmail: this.contactPersonEmail,
      countryOfBusiness: this.countryOfBusiness,
      stateProvince: this.stateProvince,
      region: this.region,
      district: this.district,
      constituency: this.constituency,
      electoralArea: this.electoralArea,
      community: this.community,
      digitalAddress: this.digitalAddress,
      level: this.level,
      status: this.status,
      accountType: this.accountType,
      memberType: this.memberType,
      date: this.date,
      last_login: this.last_login,
      referenceId: this.referenceId,
      branchId: this.branchId,
      editable: this.editable,
      updatedBy: this.updatedBy,
      updateDate: this.updateDate,
      updatedByInfo: this.updatedByInfo,
      branchInfo: this.branchInfo.toJson(),
      categoryInfo: this.categoryInfo.toJson(),
      certificates: this.certificates === null? []: this.certificates.map((certificate) => certificate.toJson()),
      identification: this.identification,
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }
}

class OrganizationTypeModel {
  id: number;
  memberId: number;
  clientId: number;
  type: string;
  createdBy: number;
  updatedBy: number;
  updateDate: string;
  date: string;

  static fromJson(json: any): OrganizationTypeModel {
    const model = new OrganizationTypeModel();
    model.id = json.id;
    model.memberId = json.memberId;
    model.clientId = json.clientId;
    model.type = json.type;
    model.createdBy = json.createdBy;
    model.updatedBy = json.updatedBy;
    model.updateDate = json.updateDate;
    model.date = json.date;
    return model;
  }

  toJson(): any {
    return {
      id: this.id,
      memberId: this.memberId,
      clientId: this.clientId,
      type: this.type,
      createdBy: this.createdBy,
      updatedBy: this.updatedBy,
      updateDate: this.updateDate,
      date: this.date,
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }
}

class CertificateModel {
  id: number;
  memberId: number;
  attachment: AttachmentModel;
  date: string;

  static fromJson(json: any): CertificateModel {
    const model = new CertificateModel();
    model.id = json.id;
    model.memberId = json.memberId;
    model.attachment = AttachmentModel.fromJson(json.attachment);
    model.date = json.date;
    return model;
  }

  toJson(): any {
    return {
      id: this.id,
      memberId: this.memberId,
      attachment: this.attachment.toJson(),
      date: this.date,
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }
}

class AttachmentModel {
  id: number;
  clientId: number;
  attachment: string;
  filename: string;
  source: string;
  size: string;
  folderId: FolderIdModel;
  fileDescription: string;
  createdBy: number;
  updatedBy: number;
  updateDate: string;
  archived: boolean;
  archivedBy: number;
  archivedDate: string;
  date: string;

  static fromJson(json: any): AttachmentModel {
    const model = new AttachmentModel();
    model.id = json.id;
    model.clientId = json.clientId;
    model.attachment = json.attachment;
    model.filename = json.filename;
    model.source = json.source;
    model.size = json.size;
    model.folderId = FolderIdModel.fromJson(json.folderId);
    model.fileDescription = json.fileDescription;
    model.createdBy = json.createdBy;
    model.updatedBy = json.updatedBy;
    model.updateDate = json.updateDate;
    model.archived = json.archived;
    model.archivedBy = json.archivedBy;
    model.archivedDate = json.archivedDate;
    model.date = json.date;
    return model;
  }

  toJson(): any {
    return {
      id: this.id,
      clientId: this.clientId,
      attachment: this.attachment,
      filename: this.filename,
      source: this.source,
      size: this.size,
      folderId: this.folderId.toJson(),
      fileDescription: this.fileDescription,
      createdBy: this.createdBy,
      updatedBy: this.updatedBy,
      updateDate: this.updateDate,
      archived: this.archived,
      archivedBy: this.archivedBy,
      archivedDate: this.archivedDate,
      date: this.date,
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }
}

class FolderIdModel {
  id: number;
  parentFolder: any;
  clientId: number;
  branchId: number;
  folder: string;
  folderType: number;
  createdBy: number;
  updatedBy: number;
  updateDate: string;
  date: string;

  static fromJson(json: any): FolderIdModel {
    const model = new FolderIdModel();
    model.id = json.id;
    model.parentFolder = json.parentFolder;
    model.clientId = json.clientId;
    model.branchId = json.branchId;
    model.folder = json.folder;
    model.folderType = json.folderType;
    model.createdBy = json.createdBy;
    model.updatedBy = json.updatedBy;
    model.updateDate = json.updateDate;
    model.date = json.date;
    return model;
  }

  toJson(): any {
    return {
      id: this.id,
      parentFolder: this.parentFolder,
      clientId: this.clientId,
      branchId: this.branchId,
      folder: this.folder,
      folderType: this.folderType,
      createdBy: this.createdBy,
      updatedBy: this.updatedBy,
      updateDate: this.updateDate,
      date: this.date,
    };
  }

  toString(): string {
    return JSON.stringify(this.toJson());
  }
}
