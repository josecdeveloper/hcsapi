
'use strict';
var server = require('../../server/server');

function normalize(parameter) {
  return typeof parameter.toJSON === 'function' ? parameter.toJSON() : parameter;
}

module.exports = function(wswsSoap) {

  var soapDataSource = server.datasources.hcs_hhax_soap;
  var _soapModel;

  soapDataSource.once('connected', function () {
    // Create the model
    _soapModel = soapDataSource.createModel('wswsSoap', {});
  });


  /**
   * GetEvaluationCodes
   * @param {GetEvaluationCodes} GetEvaluationCodes GetEvaluationCodes
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetEvaluationCodes = function(GetEvaluationCodes, callback) {
      _soapModel.GetEvaluationCodes(normalize(GetEvaluationCodes), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetInServiceTopics
   * @param {GetInServiceTopics} GetInServiceTopics GetInServiceTopics
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetInServiceTopics = function(GetInServiceTopics, callback) {
      _soapModel.GetInServiceTopics(normalize(GetInServiceTopics), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetInServiceInstructors
   * @param {GetInServiceInstructors} GetInServiceInstructors GetInServiceInstructors
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetInServiceInstructors = function(GetInServiceInstructors, callback) {
      _soapModel.GetInServiceInstructors(normalize(GetInServiceInstructors), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetInServiceNoShowReason
   * @param {GetInServiceNoShowReason} GetInServiceNoShowReason GetInServiceNoShowReason
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetInServiceNoShowReason = function(GetInServiceNoShowReason, callback) {
      _soapModel.GetInServiceNoShowReason(normalize(GetInServiceNoShowReason), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPOCTasks
   * @param {GetPOCTasks} GetPOCTasks GetPOCTasks
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPOCTasks = function(GetPOCTasks, callback) {
      _soapModel.GetPOCTasks(normalize(GetPOCTasks), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetVisitDeleteReasons
   * @param {GetVisitDeleteReasons} GetVisitDeleteReasons GetVisitDeleteReasons
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetVisitDeleteReasons = function(GetVisitDeleteReasons, callback) {
      _soapModel.GetVisitDeleteReasons(normalize(GetVisitDeleteReasons), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPayers
   * @param {GetPayers} GetPayers GetPayers
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPayers = function(GetPayers, callback) {
      _soapModel.GetPayers(normalize(GetPayers), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverDocumentType
   * @param {GetCaregiverDocumentType} GetCaregiverDocumentType GetCaregiverDocumentType
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverDocumentType = function(GetCaregiverDocumentType, callback) {
      _soapModel.GetCaregiverDocumentType(normalize(GetCaregiverDocumentType), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetGenders
   * @param {GetGenders} GetGenders GetGenders
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetGenders = function(GetGenders, callback) {
      _soapModel.GetGenders(normalize(GetGenders), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetContractDischargeReason
   * @param {GetContractDischargeReason} GetContractDischargeReason GetContractDischargeReason
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetContractDischargeReason = function(GetContractDischargeReason, callback) {
      _soapModel.GetContractDischargeReason(normalize(GetContractDischargeReason), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetReferralStatus
   * @param {GetReferralStatus} GetReferralStatus GetReferralStatus
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetReferralStatus = function(GetReferralStatus, callback) {
      _soapModel.GetReferralStatus(normalize(GetReferralStatus), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetReferralSalesStaff
   * @param {GetReferralSalesStaff} GetReferralSalesStaff GetReferralSalesStaff
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetReferralSalesStaff = function(GetReferralSalesStaff, callback) {
      _soapModel.GetReferralSalesStaff(normalize(GetReferralSalesStaff), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetReferralSourceContact
   * @param {GetReferralSourceContact} GetReferralSourceContact GetReferralSourceContact
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetReferralSourceContact = function(GetReferralSourceContact, callback) {
      _soapModel.GetReferralSourceContact(normalize(GetReferralSourceContact), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetReferralLostReason
   * @param {GetReferralLostReason} GetReferralLostReason GetReferralLostReason
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetReferralLostReason = function(GetReferralLostReason, callback) {
      _soapModel.GetReferralLostReason(normalize(GetReferralLostReason), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetReferralSourceType
   * @param {GetReferralSourceType} GetReferralSourceType GetReferralSourceType
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetReferralSourceType = function(GetReferralSourceType, callback) {
      _soapModel.GetReferralSourceType(normalize(GetReferralSourceType), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetMissedVisitReasons
   * @param {GetMissedVisitReasons} GetMissedVisitReasons GetMissedVisitReasons
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetMissedVisitReasons = function(GetMissedVisitReasons, callback) {
      _soapModel.GetMissedVisitReasons(normalize(GetMissedVisitReasons), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetMissedVisitActionTaken
   * @param {GetMissedVisitActionTaken} GetMissedVisitActionTaken GetMissedVisitActionTaken
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetMissedVisitActionTaken = function(GetMissedVisitActionTaken, callback) {
      _soapModel.GetMissedVisitActionTaken(normalize(GetMissedVisitActionTaken), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetRefusedDutyReason
   * @param {GetRefusedDutyReason} GetRefusedDutyReason GetRefusedDutyReason
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetRefusedDutyReason = function(GetRefusedDutyReason, callback) {
      _soapModel.GetRefusedDutyReason(normalize(GetRefusedDutyReason), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetI9ColumnCDocument
   * @param {GetI9ColumnCDocument} GetI9ColumnCDocument GetI9ColumnCDocument
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetI9ColumnCDocument = function(GetI9ColumnCDocument, callback) {
      _soapModel.GetI9ColumnCDocument(normalize(GetI9ColumnCDocument), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverPTOAccrualTypes
   * @param {GetCaregiverPTOAccrualTypes} GetCaregiverPTOAccrualTypes GetCaregiverPTOAccrualTypes
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverPTOAccrualTypes = function(GetCaregiverPTOAccrualTypes, callback) {
      _soapModel.GetCaregiverPTOAccrualTypes(normalize(GetCaregiverPTOAccrualTypes), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverGender
   * @param {GetCaregiverGender} GetCaregiverGender GetCaregiverGender
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverGender = function(GetCaregiverGender, callback) {
      _soapModel.GetCaregiverGender(normalize(GetCaregiverGender), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPatientCaregiverPreferences
   * @param {GetPatientCaregiverPreferences} GetPatientCaregiverPreferences GetPatientCaregiverPreferences
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPatientCaregiverPreferences = function(GetPatientCaregiverPreferences, callback) {
      _soapModel.GetPatientCaregiverPreferences(normalize(GetPatientCaregiverPreferences), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverGenderForPatientPreference
   * @param {GetCaregiverGenderForPatientPreference} GetCaregiverGenderForPatientPreference GetCaregiverGenderForPatientPreference
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverGenderForPatientPreference = function(GetCaregiverGenderForPatientPreference, callback) {
      _soapModel.GetCaregiverGenderForPatientPreference(normalize(GetCaregiverGenderForPatientPreference), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * SearchPhoneNumber
   * @param {SearchPhoneNumber} SearchPhoneNumber SearchPhoneNumber
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.SearchPhoneNumber = function(SearchPhoneNumber, callback) {
      _soapModel.SearchPhoneNumber(normalize(SearchPhoneNumber), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPatientChanges
   * @param {GetPatientChanges} GetPatientChanges GetPatientChanges
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPatientChanges = function(GetPatientChanges, callback) {
      _soapModel.GetPatientChanges(normalize(GetPatientChanges), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPatientChangesV2
   * @param {GetPatientChangesV2} GetPatientChangesV2 GetPatientChangesV2
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPatientChangesV2 = function(GetPatientChangesV2, callback) {
      _soapModel.GetPatientChangesV2(normalize(GetPatientChangesV2), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPatientContractChanges
   * @param {GetPatientContractChanges} GetPatientContractChanges GetPatientContractChanges
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPatientContractChanges = function(GetPatientContractChanges, callback) {
      _soapModel.GetPatientContractChanges(normalize(GetPatientContractChanges), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverChanges
   * @param {GetCaregiverChanges} GetCaregiverChanges GetCaregiverChanges
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverChanges = function(GetCaregiverChanges, callback) {
      _soapModel.GetCaregiverChanges(normalize(GetCaregiverChanges), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverAbsenceChanges
   * @param {GetCaregiverAbsenceChanges} GetCaregiverAbsenceChanges GetCaregiverAbsenceChanges
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverAbsenceChanges = function(GetCaregiverAbsenceChanges, callback) {
      _soapModel.GetCaregiverAbsenceChanges(normalize(GetCaregiverAbsenceChanges), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverSpecialAvailabilityChanges
   * @param {GetCaregiverSpecialAvailabilityChanges} GetCaregiverSpecialAvailabilityChanges GetCaregiverSpecialAvailabilityChanges
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverSpecialAvailabilityChanges = function(GetCaregiverSpecialAvailabilityChanges, callback) {
      _soapModel.GetCaregiverSpecialAvailabilityChanges(normalize(GetCaregiverSpecialAvailabilityChanges), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverPermanentWeekAvailabilityChanges
   * @param {GetCaregiverPermanentWeekAvailabilityChanges} GetCaregiverPermanentWeekAvailabilityChanges GetCaregiverPermanentWeekAvailabilityChanges
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverPermanentWeekAvailabilityChanges = function(GetCaregiverPermanentWeekAvailabilityChanges, callback) {
      _soapModel.GetCaregiverPermanentWeekAvailabilityChanges(normalize(GetCaregiverPermanentWeekAvailabilityChanges), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverPreferenceChanges
   * @param {GetCaregiverPreferenceChanges} GetCaregiverPreferenceChanges GetCaregiverPreferenceChanges
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverPreferenceChanges = function(GetCaregiverPreferenceChanges, callback) {
      _soapModel.GetCaregiverPreferenceChanges(normalize(GetCaregiverPreferenceChanges), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverPayrollInfoChanges
   * @param {GetCaregiverPayrollInfoChanges} GetCaregiverPayrollInfoChanges GetCaregiverPayrollInfoChanges
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverPayrollInfoChanges = function(GetCaregiverPayrollInfoChanges, callback) {
      _soapModel.GetCaregiverPayrollInfoChanges(normalize(GetCaregiverPayrollInfoChanges), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPatientNoteChanges
   * @param {GetPatientNoteChanges} GetPatientNoteChanges GetPatientNoteChanges
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPatientNoteChanges = function(GetPatientNoteChanges, callback) {
      _soapModel.GetPatientNoteChanges(normalize(GetPatientNoteChanges), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverNoteChanges
   * @param {GetCaregiverNoteChanges} GetCaregiverNoteChanges GetCaregiverNoteChanges
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverNoteChanges = function(GetCaregiverNoteChanges, callback) {
      _soapModel.GetCaregiverNoteChanges(normalize(GetCaregiverNoteChanges), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCallDashBoardData
   * @param {GetCallDashBoardData} GetCallDashBoardData GetCallDashBoardData
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCallDashBoardData = function(GetCallDashBoardData, callback) {
      _soapModel.GetCallDashBoardData(normalize(GetCallDashBoardData), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * SearchPayrollBatches
   * @param {SearchPayrollBatches} SearchPayrollBatches SearchPayrollBatches
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.SearchPayrollBatches = function(SearchPayrollBatches, callback) {
      _soapModel.SearchPayrollBatches(normalize(SearchPayrollBatches), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPayrollBatchDetails
   * @param {GetPayrollBatchDetails} GetPayrollBatchDetails GetPayrollBatchDetails
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPayrollBatchDetails = function(GetPayrollBatchDetails, callback) {
      _soapModel.GetPayrollBatchDetails(normalize(GetPayrollBatchDetails), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * SearchPayrollBatchCaregivers
   * @param {SearchPayrollBatchCaregivers} SearchPayrollBatchCaregivers SearchPayrollBatchCaregivers
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.SearchPayrollBatchCaregivers = function(SearchPayrollBatchCaregivers, callback) {
      _soapModel.SearchPayrollBatchCaregivers(normalize(SearchPayrollBatchCaregivers), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * SearchBilledVisits
   * @param {SearchBilledVisits} SearchBilledVisits SearchBilledVisits
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.SearchBilledVisits = function(SearchBilledVisits, callback) {
      _soapModel.SearchBilledVisits(normalize(SearchBilledVisits), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * AddCollectionNote
   * @param {AddCollectionNote} AddCollectionNote AddCollectionNote
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.AddCollectionNote = function(AddCollectionNote, callback) {
      _soapModel.AddCollectionNote(normalize(AddCollectionNote), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCollectionNotes
   * @param {GetCollectionNotes} GetCollectionNotes GetCollectionNotes
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCollectionNotes = function(GetCollectionNotes, callback) {
      _soapModel.GetCollectionNotes(normalize(GetCollectionNotes), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * UpdateCaregiverMedicalProfileCustom
   * @param {UpdateCaregiverMedicalProfileCustom} UpdateCaregiverMedicalProfileCustom UpdateCaregiverMedicalProfileCustom
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.UpdateCaregiverMedicalProfileCustom = function(UpdateCaregiverMedicalProfileCustom, callback) {
      _soapModel.UpdateCaregiverMedicalProfileCustom(normalize(UpdateCaregiverMedicalProfileCustom), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * VisitCallInOut
   * @param {VisitCallInOut} VisitCallInOut VisitCallInOut
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.VisitCallInOut = function(VisitCallInOut, callback) {
      _soapModel.VisitCallInOut(normalize(VisitCallInOut), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * SearchVisits
   * @param {SearchVisits} SearchVisits SearchVisits
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.SearchVisits = function(SearchVisits, callback) {
      _soapModel.SearchVisits(normalize(SearchVisits), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetScheduleInfo
   * @param {GetScheduleInfo} GetScheduleInfo GetScheduleInfo
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetScheduleInfo = function(GetScheduleInfo, callback) {
      _soapModel.GetScheduleInfo(normalize(GetScheduleInfo), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * DeleteVisit
   * @param {DeleteVisit} DeleteVisit DeleteVisit
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.DeleteVisit = function(DeleteVisit, callback) {
      _soapModel.DeleteVisit(normalize(DeleteVisit), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetMasterWeeks
   * @param {GetMasterWeeks} GetMasterWeeks GetMasterWeeks
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetMasterWeeks = function(GetMasterWeeks, callback) {
      _soapModel.GetMasterWeeks(normalize(GetMasterWeeks), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * CreateSchedule
   * @param {CreateSchedule} CreateSchedule CreateSchedule
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.CreateSchedule = function(CreateSchedule, callback) {
      _soapModel.CreateSchedule(normalize(CreateSchedule), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * UpdateSchedule
   * @param {UpdateSchedule} UpdateSchedule UpdateSchedule
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.UpdateSchedule = function(UpdateSchedule, callback) {
      _soapModel.UpdateSchedule(normalize(UpdateSchedule), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * CreateLinkedSchedule
   * @param {CreateLinkedSchedule} CreateLinkedSchedule CreateLinkedSchedule
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.CreateLinkedSchedule = function(CreateLinkedSchedule, callback) {
      _soapModel.CreateLinkedSchedule(normalize(CreateLinkedSchedule), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * UpdateLinkedSchedule
   * @param {UpdateLinkedSchedule} UpdateLinkedSchedule UpdateLinkedSchedule
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.UpdateLinkedSchedule = function(UpdateLinkedSchedule, callback) {
      _soapModel.UpdateLinkedSchedule(normalize(UpdateLinkedSchedule), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetVisitInfo
   * @param {GetVisitInfo} GetVisitInfo GetVisitInfo
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetVisitInfo = function(GetVisitInfo, callback) {
      _soapModel.GetVisitInfo(normalize(GetVisitInfo), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetVisitBillInfo
   * @param {GetVisitBillInfo} GetVisitBillInfo GetVisitBillInfo
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetVisitBillInfo = function(GetVisitBillInfo, callback) {
      _soapModel.GetVisitBillInfo(normalize(GetVisitBillInfo), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetVisitPayrollInfo
   * @param {GetVisitPayrollInfo} GetVisitPayrollInfo GetVisitPayrollInfo
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetVisitPayrollInfo = function(GetVisitPayrollInfo, callback) {
      _soapModel.GetVisitPayrollInfo(normalize(GetVisitPayrollInfo), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetLinkedScheduleInfo
   * @param {GetLinkedScheduleInfo} GetLinkedScheduleInfo GetLinkedScheduleInfo
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetLinkedScheduleInfo = function(GetLinkedScheduleInfo, callback) {
      _soapModel.GetLinkedScheduleInfo(normalize(GetLinkedScheduleInfo), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetVisitInfoV2
   * @param {GetVisitInfoV2} GetVisitInfoV2 GetVisitInfoV2
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetVisitInfoV2 = function(GetVisitInfoV2, callback) {
      _soapModel.GetVisitInfoV2(normalize(GetVisitInfoV2), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * ConfirmVisitsV2
   * @param {ConfirmVisitsV2} ConfirmVisitsV2 ConfirmVisitsV2
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.ConfirmVisitsV2 = function(ConfirmVisitsV2, callback) {
      _soapModel.ConfirmVisitsV2(normalize(ConfirmVisitsV2), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * ConfirmVisits
   * @param {ConfirmVisits} ConfirmVisits ConfirmVisits
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.ConfirmVisits = function(ConfirmVisits, callback) {
      _soapModel.ConfirmVisits(normalize(ConfirmVisits), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * ConfirmVisitsEVV
   * @param {ConfirmVisitsEVV} ConfirmVisitsEVV ConfirmVisitsEVV
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.ConfirmVisitsEVV = function(ConfirmVisitsEVV, callback) {
      _soapModel.ConfirmVisitsEVV(normalize(ConfirmVisitsEVV), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * CreatePatientNote
   * @param {CreatePatientNote} CreatePatientNote CreatePatientNote
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.CreatePatientNote = function(CreatePatientNote, callback) {
      _soapModel.CreatePatientNote(normalize(CreatePatientNote), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * CreatePatient
   * @param {CreatePatient} CreatePatient CreatePatient
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.CreatePatient = function(CreatePatient, callback) {
      _soapModel.CreatePatient(normalize(CreatePatient), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * UpdatePatientDemographics
   * @param {UpdatePatientDemographics} UpdatePatientDemographics UpdatePatientDemographics
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.UpdatePatientDemographics = function(UpdatePatientDemographics, callback) {
      _soapModel.UpdatePatientDemographics(normalize(UpdatePatientDemographics), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPatientDemographics
   * @param {GetPatientDemographics} GetPatientDemographics GetPatientDemographics
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPatientDemographics = function(GetPatientDemographics, callback) {
      _soapModel.GetPatientDemographics(normalize(GetPatientDemographics), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * SearchPatients
   * @param {SearchPatients} SearchPatients SearchPatients
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.SearchPatients = function(SearchPatients, callback) {
      _soapModel.SearchPatients(normalize(SearchPatients), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPatientContracts
   * @param {GetPatientContracts} GetPatientContracts GetPatientContracts
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPatientContracts = function(GetPatientContracts, callback) {
      _soapModel.GetPatientContracts(normalize(GetPatientContracts), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPatientNotes
   * @param {GetPatientNotes} GetPatientNotes GetPatientNotes
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPatientNotes = function(GetPatientNotes, callback) {
      _soapModel.GetPatientNotes(normalize(GetPatientNotes), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * SearchPatientPOC
   * @param {SearchPatientPOC} SearchPatientPOC SearchPatientPOC
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.SearchPatientPOC = function(SearchPatientPOC, callback) {
      _soapModel.SearchPatientPOC(normalize(SearchPatientPOC), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPatientPOCInfo
   * @param {GetPatientPOCInfo} GetPatientPOCInfo GetPatientPOCInfo
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPatientPOCInfo = function(GetPatientPOCInfo, callback) {
      _soapModel.GetPatientPOCInfo(normalize(GetPatientPOCInfo), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * SearchPatientAuthorizations
   * @param {SearchPatientAuthorizations} SearchPatientAuthorizations SearchPatientAuthorizations
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.SearchPatientAuthorizations = function(SearchPatientAuthorizations, callback) {
      _soapModel.SearchPatientAuthorizations(normalize(SearchPatientAuthorizations), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPatientAuthorizationInfo
   * @param {GetPatientAuthorizationInfo} GetPatientAuthorizationInfo GetPatientAuthorizationInfo
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPatientAuthorizationInfo = function(GetPatientAuthorizationInfo, callback) {
      _soapModel.GetPatientAuthorizationInfo(normalize(GetPatientAuthorizationInfo), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPatientDisciplines
   * @param {GetPatientDisciplines} GetPatientDisciplines GetPatientDisciplines
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPatientDisciplines = function(GetPatientDisciplines, callback) {
      _soapModel.GetPatientDisciplines(normalize(GetPatientDisciplines), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * CreatePatientAuthorization
   * @param {CreatePatientAuthorization} CreatePatientAuthorization CreatePatientAuthorization
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.CreatePatientAuthorization = function(CreatePatientAuthorization, callback) {
      _soapModel.CreatePatientAuthorization(normalize(CreatePatientAuthorization), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * UpdatePatientAuthorization
   * @param {UpdatePatientAuthorization} UpdatePatientAuthorization UpdatePatientAuthorization
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.UpdatePatientAuthorization = function(UpdatePatientAuthorization, callback) {
      _soapModel.UpdatePatientAuthorization(normalize(UpdatePatientAuthorization), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * CreatePatientPOC
   * @param {CreatePatientPOC} CreatePatientPOC CreatePatientPOC
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.CreatePatientPOC = function(CreatePatientPOC, callback) {
      _soapModel.CreatePatientPOC(normalize(CreatePatientPOC), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * UpdatePatientPOC
   * @param {UpdatePatientPOC} UpdatePatientPOC UpdatePatientPOC
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.UpdatePatientPOC = function(UpdatePatientPOC, callback) {
      _soapModel.UpdatePatientPOC(normalize(UpdatePatientPOC), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * AddPatientContract
   * @param {AddPatientContract} AddPatientContract AddPatientContract
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.AddPatientContract = function(AddPatientContract, callback) {
      _soapModel.AddPatientContract(normalize(AddPatientContract), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPatientDocumentType
   * @param {GetPatientDocumentType} GetPatientDocumentType GetPatientDocumentType
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPatientDocumentType = function(GetPatientDocumentType, callback) {
      _soapModel.GetPatientDocumentType(normalize(GetPatientDocumentType), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * SearchPatientDocument
   * @param {SearchPatientDocument} SearchPatientDocument SearchPatientDocument
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.SearchPatientDocument = function(SearchPatientDocument, callback) {
      _soapModel.SearchPatientDocument(normalize(SearchPatientDocument), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * AddPatientDocument
   * @param {AddPatientDocument} AddPatientDocument AddPatientDocument
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.AddPatientDocument = function(AddPatientDocument, callback) {
      _soapModel.AddPatientDocument(normalize(AddPatientDocument), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * UpdatePatientDocument
   * @param {UpdatePatientDocument} UpdatePatientDocument UpdatePatientDocument
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.UpdatePatientDocument = function(UpdatePatientDocument, callback) {
      _soapModel.UpdatePatientDocument(normalize(UpdatePatientDocument), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * DeletePatientDocument
   * @param {DeletePatientDocument} DeletePatientDocument DeletePatientDocument
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.DeletePatientDocument = function(DeletePatientDocument, callback) {
      _soapModel.DeletePatientDocument(normalize(DeletePatientDocument), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * DownloadPatientDocument
   * @param {DownloadPatientDocument} DownloadPatientDocument DownloadPatientDocument
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.DownloadPatientDocument = function(DownloadPatientDocument, callback) {
      _soapModel.DownloadPatientDocument(normalize(DownloadPatientDocument), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * ChangePatientDocument
   * @param {ChangePatientDocument} ChangePatientDocument ChangePatientDocument
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.ChangePatientDocument = function(ChangePatientDocument, callback) {
      _soapModel.ChangePatientDocument(normalize(ChangePatientDocument), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * UpdatePatientClinicalInfo
   * @param {UpdatePatientClinicalInfo} UpdatePatientClinicalInfo UpdatePatientClinicalInfo
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.UpdatePatientClinicalInfo = function(UpdatePatientClinicalInfo, callback) {
      _soapModel.UpdatePatientClinicalInfo(normalize(UpdatePatientClinicalInfo), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPatientClinicalInfo
   * @param {GetPatientClinicalInfo} GetPatientClinicalInfo GetPatientClinicalInfo
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPatientClinicalInfo = function(GetPatientClinicalInfo, callback) {
      _soapModel.GetPatientClinicalInfo(normalize(GetPatientClinicalInfo), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPatientReferralInfo
   * @param {GetPatientReferralInfo} GetPatientReferralInfo GetPatientReferralInfo
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPatientReferralInfo = function(GetPatientReferralInfo, callback) {
      _soapModel.GetPatientReferralInfo(normalize(GetPatientReferralInfo), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * UpdatePatientContract
   * @param {UpdatePatientContract} UpdatePatientContract UpdatePatientContract
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.UpdatePatientContract = function(UpdatePatientContract, callback) {
      _soapModel.UpdatePatientContract(normalize(UpdatePatientContract), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetReferralSource
   * @param {GetReferralSource} GetReferralSource GetReferralSource
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetReferralSource = function(GetReferralSource, callback) {
      _soapModel.GetReferralSource(normalize(GetReferralSource), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetReferralProfile
   * @param {GetReferralProfile} GetReferralProfile GetReferralProfile
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetReferralProfile = function(GetReferralProfile, callback) {
      _soapModel.GetReferralProfile(normalize(GetReferralProfile), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * UpdatePatientReferralInfo
   * @param {UpdatePatientReferralInfo} UpdatePatientReferralInfo UpdatePatientReferralInfo
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.UpdatePatientReferralInfo = function(UpdatePatientReferralInfo, callback) {
      _soapModel.UpdatePatientReferralInfo(normalize(UpdatePatientReferralInfo), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * CreateReferralSource
   * @param {CreateReferralSource} CreateReferralSource CreateReferralSource
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.CreateReferralSource = function(CreateReferralSource, callback) {
      _soapModel.CreateReferralSource(normalize(CreateReferralSource), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPatientAddress
   * @param {GetPatientAddress} GetPatientAddress GetPatientAddress
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPatientAddress = function(GetPatientAddress, callback) {
      _soapModel.GetPatientAddress(normalize(GetPatientAddress), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPatientPreferences
   * @param {GetPatientPreferences} GetPatientPreferences GetPatientPreferences
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPatientPreferences = function(GetPatientPreferences, callback) {
      _soapModel.GetPatientPreferences(normalize(GetPatientPreferences), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * UpdatePatientPreference
   * @param {UpdatePatientPreference} UpdatePatientPreference UpdatePatientPreference
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.UpdatePatientPreference = function(UpdatePatientPreference, callback) {
      _soapModel.UpdatePatientPreference(normalize(UpdatePatientPreference), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * CreateCaregiverNote
   * @param {CreateCaregiverNote} CreateCaregiverNote CreateCaregiverNote
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.CreateCaregiverNote = function(CreateCaregiverNote, callback) {
      _soapModel.CreateCaregiverNote(normalize(CreateCaregiverNote), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * CreateCaregiverMedical
   * @param {CreateCaregiverMedical} CreateCaregiverMedical CreateCaregiverMedical
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.CreateCaregiverMedical = function(CreateCaregiverMedical, callback) {
      _soapModel.CreateCaregiverMedical(normalize(CreateCaregiverMedical), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * CreateCaregiverOtherCompliance
   * @param {CreateCaregiverOtherCompliance} CreateCaregiverOtherCompliance CreateCaregiverOtherCompliance
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.CreateCaregiverOtherCompliance = function(CreateCaregiverOtherCompliance, callback) {
      _soapModel.CreateCaregiverOtherCompliance(normalize(CreateCaregiverOtherCompliance), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * CreateCaregiver
   * @param {CreateCaregiver} CreateCaregiver CreateCaregiver
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.CreateCaregiver = function(CreateCaregiver, callback) {
      _soapModel.CreateCaregiver(normalize(CreateCaregiver), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * UpdateCaregiverDemographics
   * @param {UpdateCaregiverDemographics} UpdateCaregiverDemographics UpdateCaregiverDemographics
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.UpdateCaregiverDemographics = function(UpdateCaregiverDemographics, callback) {
      _soapModel.UpdateCaregiverDemographics(normalize(UpdateCaregiverDemographics), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * SearchCaregivers
   * @param {SearchCaregivers} SearchCaregivers SearchCaregivers
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.SearchCaregivers = function(SearchCaregivers, callback) {
      _soapModel.SearchCaregivers(normalize(SearchCaregivers), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverDemographics
   * @param {GetCaregiverDemographics} GetCaregiverDemographics GetCaregiverDemographics
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverDemographics = function(GetCaregiverDemographics, callback) {
      _soapModel.GetCaregiverDemographics(normalize(GetCaregiverDemographics), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverPermanentWeekAvailability
   * @param {GetCaregiverPermanentWeekAvailability} GetCaregiverPermanentWeekAvailability GetCaregiverPermanentWeekAvailability
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverPermanentWeekAvailability = function(GetCaregiverPermanentWeekAvailability, callback) {
      _soapModel.GetCaregiverPermanentWeekAvailability(normalize(GetCaregiverPermanentWeekAvailability), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * AddCaregiverPermanentWeekAvailability
   * @param {AddCaregiverPermanentWeekAvailability} AddCaregiverPermanentWeekAvailability AddCaregiverPermanentWeekAvailability
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.AddCaregiverPermanentWeekAvailability = function(AddCaregiverPermanentWeekAvailability, callback) {
      _soapModel.AddCaregiverPermanentWeekAvailability(normalize(AddCaregiverPermanentWeekAvailability), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * UpdateCaregiverPermanentWeekAvailability
   * @param {UpdateCaregiverPermanentWeekAvailability} UpdateCaregiverPermanentWeekAvailability UpdateCaregiverPermanentWeekAvailability
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.UpdateCaregiverPermanentWeekAvailability = function(UpdateCaregiverPermanentWeekAvailability, callback) {
      _soapModel.UpdateCaregiverPermanentWeekAvailability(normalize(UpdateCaregiverPermanentWeekAvailability), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * UpdateCaregiverAvailabilityMaxVisits
   * @param {UpdateCaregiverAvailabilityMaxVisits} UpdateCaregiverAvailabilityMaxVisits UpdateCaregiverAvailabilityMaxVisits
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.UpdateCaregiverAvailabilityMaxVisits = function(UpdateCaregiverAvailabilityMaxVisits, callback) {
      _soapModel.UpdateCaregiverAvailabilityMaxVisits(normalize(UpdateCaregiverAvailabilityMaxVisits), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverSpecialAvailability
   * @param {GetCaregiverSpecialAvailability} GetCaregiverSpecialAvailability GetCaregiverSpecialAvailability
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverSpecialAvailability = function(GetCaregiverSpecialAvailability, callback) {
      _soapModel.GetCaregiverSpecialAvailability(normalize(GetCaregiverSpecialAvailability), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * AddCaregiverSpecialAvailability
   * @param {AddCaregiverSpecialAvailability} AddCaregiverSpecialAvailability AddCaregiverSpecialAvailability
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.AddCaregiverSpecialAvailability = function(AddCaregiverSpecialAvailability, callback) {
      _soapModel.AddCaregiverSpecialAvailability(normalize(AddCaregiverSpecialAvailability), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * UpdateCaregiverSpecialAvailability
   * @param {UpdateCaregiverSpecialAvailability} UpdateCaregiverSpecialAvailability UpdateCaregiverSpecialAvailability
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.UpdateCaregiverSpecialAvailability = function(UpdateCaregiverSpecialAvailability, callback) {
      _soapModel.UpdateCaregiverSpecialAvailability(normalize(UpdateCaregiverSpecialAvailability), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverPayCodes
   * @param {GetCaregiverPayCodes} GetCaregiverPayCodes GetCaregiverPayCodes
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverPayCodes = function(GetCaregiverPayCodes, callback) {
      _soapModel.GetCaregiverPayCodes(normalize(GetCaregiverPayCodes), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverNotes
   * @param {GetCaregiverNotes} GetCaregiverNotes GetCaregiverNotes
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverNotes = function(GetCaregiverNotes, callback) {
      _soapModel.GetCaregiverNotes(normalize(GetCaregiverNotes), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * AddCaregiverRate
   * @param {AddCaregiverRate} AddCaregiverRate AddCaregiverRate
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.AddCaregiverRate = function(AddCaregiverRate, callback) {
      _soapModel.AddCaregiverRate(normalize(AddCaregiverRate), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * UpdateCaregiverRate
   * @param {UpdateCaregiverRate} UpdateCaregiverRate UpdateCaregiverRate
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.UpdateCaregiverRate = function(UpdateCaregiverRate, callback) {
      _soapModel.UpdateCaregiverRate(normalize(UpdateCaregiverRate), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverRates
   * @param {GetCaregiverRates} GetCaregiverRates GetCaregiverRates
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverRates = function(GetCaregiverRates, callback) {
      _soapModel.GetCaregiverRates(normalize(GetCaregiverRates), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * AddCaregiverTrainingSchool
   * @param {AddCaregiverTrainingSchool} AddCaregiverTrainingSchool AddCaregiverTrainingSchool
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.AddCaregiverTrainingSchool = function(AddCaregiverTrainingSchool, callback) {
      _soapModel.AddCaregiverTrainingSchool(normalize(AddCaregiverTrainingSchool), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * UpdateCaregiverTrainingSchool
   * @param {UpdateCaregiverTrainingSchool} UpdateCaregiverTrainingSchool UpdateCaregiverTrainingSchool
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.UpdateCaregiverTrainingSchool = function(UpdateCaregiverTrainingSchool, callback) {
      _soapModel.UpdateCaregiverTrainingSchool(normalize(UpdateCaregiverTrainingSchool), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverTrainingSchools
   * @param {GetCaregiverTrainingSchools} GetCaregiverTrainingSchools GetCaregiverTrainingSchools
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverTrainingSchools = function(GetCaregiverTrainingSchools, callback) {
      _soapModel.GetCaregiverTrainingSchools(normalize(GetCaregiverTrainingSchools), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetComplianceTrainingSchools
   * @param {GetComplianceTrainingSchools} GetComplianceTrainingSchools GetComplianceTrainingSchools
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetComplianceTrainingSchools = function(GetComplianceTrainingSchools, callback) {
      _soapModel.GetComplianceTrainingSchools(normalize(GetComplianceTrainingSchools), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * AddCaregiverEvaluation
   * @param {AddCaregiverEvaluation} AddCaregiverEvaluation AddCaregiverEvaluation
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.AddCaregiverEvaluation = function(AddCaregiverEvaluation, callback) {
      _soapModel.AddCaregiverEvaluation(normalize(AddCaregiverEvaluation), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * UpdateCaregiverEvaluation
   * @param {UpdateCaregiverEvaluation} UpdateCaregiverEvaluation UpdateCaregiverEvaluation
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.UpdateCaregiverEvaluation = function(UpdateCaregiverEvaluation, callback) {
      _soapModel.UpdateCaregiverEvaluation(normalize(UpdateCaregiverEvaluation), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverEvaluations
   * @param {GetCaregiverEvaluations} GetCaregiverEvaluations GetCaregiverEvaluations
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverEvaluations = function(GetCaregiverEvaluations, callback) {
      _soapModel.GetCaregiverEvaluations(normalize(GetCaregiverEvaluations), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * AddCaregiverInService
   * @param {AddCaregiverInService} AddCaregiverInService AddCaregiverInService
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.AddCaregiverInService = function(AddCaregiverInService, callback) {
      _soapModel.AddCaregiverInService(normalize(AddCaregiverInService), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * UpdateCaregiverInService
   * @param {UpdateCaregiverInService} UpdateCaregiverInService UpdateCaregiverInService
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.UpdateCaregiverInService = function(UpdateCaregiverInService, callback) {
      _soapModel.UpdateCaregiverInService(normalize(UpdateCaregiverInService), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverInServices
   * @param {GetCaregiverInServices} GetCaregiverInServices GetCaregiverInServices
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverInServices = function(GetCaregiverInServices, callback) {
      _soapModel.GetCaregiverInServices(normalize(GetCaregiverInServices), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * UploadCaregiverPicture
   * @param {UploadCaregiverPicture} UploadCaregiverPicture UploadCaregiverPicture
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.UploadCaregiverPicture = function(UploadCaregiverPicture, callback) {
      _soapModel.UploadCaregiverPicture(normalize(UploadCaregiverPicture), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * RemoveCaregiverPicture
   * @param {RemoveCaregiverPicture} RemoveCaregiverPicture RemoveCaregiverPicture
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.RemoveCaregiverPicture = function(RemoveCaregiverPicture, callback) {
      _soapModel.RemoveCaregiverPicture(normalize(RemoveCaregiverPicture), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverPreferences
   * @param {GetCaregiverPreferences} GetCaregiverPreferences GetCaregiverPreferences
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverPreferences = function(GetCaregiverPreferences, callback) {
      _soapModel.GetCaregiverPreferences(normalize(GetCaregiverPreferences), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * DownloadCaregiverPicture
   * @param {DownloadCaregiverPicture} DownloadCaregiverPicture DownloadCaregiverPicture
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.DownloadCaregiverPicture = function(DownloadCaregiverPicture, callback) {
      _soapModel.DownloadCaregiverPicture(normalize(DownloadCaregiverPicture), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * SearchCaregiverDocument
   * @param {SearchCaregiverDocument} SearchCaregiverDocument SearchCaregiverDocument
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.SearchCaregiverDocument = function(SearchCaregiverDocument, callback) {
      _soapModel.SearchCaregiverDocument(normalize(SearchCaregiverDocument), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * AddCaregiverDocument
   * @param {AddCaregiverDocument} AddCaregiverDocument AddCaregiverDocument
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.AddCaregiverDocument = function(AddCaregiverDocument, callback) {
      _soapModel.AddCaregiverDocument(normalize(AddCaregiverDocument), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * UpdateCaregiverDocument
   * @param {UpdateCaregiverDocument} UpdateCaregiverDocument UpdateCaregiverDocument
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.UpdateCaregiverDocument = function(UpdateCaregiverDocument, callback) {
      _soapModel.UpdateCaregiverDocument(normalize(UpdateCaregiverDocument), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * DeleteCaregiverDocument
   * @param {DeleteCaregiverDocument} DeleteCaregiverDocument DeleteCaregiverDocument
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.DeleteCaregiverDocument = function(DeleteCaregiverDocument, callback) {
      _soapModel.DeleteCaregiverDocument(normalize(DeleteCaregiverDocument), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * DownloadCaregiverDocument
   * @param {DownloadCaregiverDocument} DownloadCaregiverDocument DownloadCaregiverDocument
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.DownloadCaregiverDocument = function(DownloadCaregiverDocument, callback) {
      _soapModel.DownloadCaregiverDocument(normalize(DownloadCaregiverDocument), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * ChangeCaregiverDocument
   * @param {ChangeCaregiverDocument} ChangeCaregiverDocument ChangeCaregiverDocument
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.ChangeCaregiverDocument = function(ChangeCaregiverDocument, callback) {
      _soapModel.ChangeCaregiverDocument(normalize(ChangeCaregiverDocument), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverChangesV2
   * @param {GetCaregiverChangesV2} GetCaregiverChangesV2 GetCaregiverChangesV2
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverChangesV2 = function(GetCaregiverChangesV2, callback) {
      _soapModel.GetCaregiverChangesV2(normalize(GetCaregiverChangesV2), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * UpdateCaregiverI9Requirements
   * @param {UpdateCaregiverI9Requirements} UpdateCaregiverI9Requirements UpdateCaregiverI9Requirements
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.UpdateCaregiverI9Requirements = function(UpdateCaregiverI9Requirements, callback) {
      _soapModel.UpdateCaregiverI9Requirements(normalize(UpdateCaregiverI9Requirements), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * UpdateCaregiverAccrualPTO
   * @param {UpdateCaregiverAccrualPTO} UpdateCaregiverAccrualPTO UpdateCaregiverAccrualPTO
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.UpdateCaregiverAccrualPTO = function(UpdateCaregiverAccrualPTO, callback) {
      _soapModel.UpdateCaregiverAccrualPTO(normalize(UpdateCaregiverAccrualPTO), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverPayrollInfoChangesV2
   * @param {GetCaregiverPayrollInfoChangesV2} GetCaregiverPayrollInfoChangesV2 GetCaregiverPayrollInfoChangesV2
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverPayrollInfoChangesV2 = function(GetCaregiverPayrollInfoChangesV2, callback) {
      _soapModel.GetCaregiverPayrollInfoChangesV2(normalize(GetCaregiverPayrollInfoChangesV2), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverAbsenceChangesV2
   * @param {GetCaregiverAbsenceChangesV2} GetCaregiverAbsenceChangesV2 GetCaregiverAbsenceChangesV2
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverAbsenceChangesV2 = function(GetCaregiverAbsenceChangesV2, callback) {
      _soapModel.GetCaregiverAbsenceChangesV2(normalize(GetCaregiverAbsenceChangesV2), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverRestriction
   * @param {GetCaregiverRestriction} GetCaregiverRestriction GetCaregiverRestriction
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverRestriction = function(GetCaregiverRestriction, callback) {
      _soapModel.GetCaregiverRestriction(normalize(GetCaregiverRestriction), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * CreateInserviceTopics
   * @param {CreateInserviceTopics} CreateInserviceTopics CreateInserviceTopics
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.CreateInserviceTopics = function(CreateInserviceTopics, callback) {
      _soapModel.CreateInserviceTopics(normalize(CreateInserviceTopics), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverPictureChanges
   * @param {GetCaregiverPictureChanges} GetCaregiverPictureChanges GetCaregiverPictureChanges
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverPictureChanges = function(GetCaregiverPictureChanges, callback) {
      _soapModel.GetCaregiverPictureChanges(normalize(GetCaregiverPictureChanges), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCoordinators
   * @param {GetCoordinators} GetCoordinators GetCoordinators
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCoordinators = function(GetCoordinators, callback) {
      _soapModel.GetCoordinators(normalize(GetCoordinators), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetOffices
   * @param {GetOffices} GetOffices GetOffices
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetOffices = function(GetOffices, callback) {
      _soapModel.GetOffices(normalize(GetOffices), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetScheduleBillInfoEditReasons
   * @param {GetScheduleBillInfoEditReasons} GetScheduleBillInfoEditReasons GetScheduleBillInfoEditReasons
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetScheduleBillInfoEditReasons = function(GetScheduleBillInfoEditReasons, callback) {
      _soapModel.GetScheduleBillInfoEditReasons(normalize(GetScheduleBillInfoEditReasons), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetFluSeasonYears
   * @param {GetFluSeasonYears} GetFluSeasonYears GetFluSeasonYears
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetFluSeasonYears = function(GetFluSeasonYears, callback) {
      _soapModel.GetFluSeasonYears(normalize(GetFluSeasonYears), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPatientNoteReasons
   * @param {GetPatientNoteReasons} GetPatientNoteReasons GetPatientNoteReasons
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPatientNoteReasons = function(GetPatientNoteReasons, callback) {
      _soapModel.GetPatientNoteReasons(normalize(GetPatientNoteReasons), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverNoteSubjects
   * @param {GetCaregiverNoteSubjects} GetCaregiverNoteSubjects GetCaregiverNoteSubjects
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverNoteSubjects = function(GetCaregiverNoteSubjects, callback) {
      _soapModel.GetCaregiverNoteSubjects(normalize(GetCaregiverNoteSubjects), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetSourceOfAdmissions
   * @param {GetSourceOfAdmissions} GetSourceOfAdmissions GetSourceOfAdmissions
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetSourceOfAdmissions = function(GetSourceOfAdmissions, callback) {
      _soapModel.GetSourceOfAdmissions(normalize(GetSourceOfAdmissions), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetBillingServiceCodes
   * @param {GetBillingServiceCodes} GetBillingServiceCodes GetBillingServiceCodes
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetBillingServiceCodes = function(GetBillingServiceCodes, callback) {
      _soapModel.GetBillingServiceCodes(normalize(GetBillingServiceCodes), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetLanguages
   * @param {GetLanguages} GetLanguages GetLanguages
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetLanguages = function(GetLanguages, callback) {
      _soapModel.GetLanguages(normalize(GetLanguages), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetContracts
   * @param {GetContracts} GetContracts GetContracts
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetContracts = function(GetContracts, callback) {
      _soapModel.GetContracts(normalize(GetContracts), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPayRateCodes
   * @param {GetPayRateCodes} GetPayRateCodes GetPayRateCodes
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPayRateCodes = function(GetPayRateCodes, callback) {
      _soapModel.GetPayRateCodes(normalize(GetPayRateCodes), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetI9Documents
   * @param {GetI9Documents} GetI9Documents GetI9Documents
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetI9Documents = function(GetI9Documents, callback) {
      _soapModel.GetI9Documents(normalize(GetI9Documents), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverReferralSources
   * @param {GetCaregiverReferralSources} GetCaregiverReferralSources GetCaregiverReferralSources
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverReferralSources = function(GetCaregiverReferralSources, callback) {
      _soapModel.GetCaregiverReferralSources(normalize(GetCaregiverReferralSources), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetStatusReasonsForCaregiver
   * @param {GetStatusReasonsForCaregiver} GetStatusReasonsForCaregiver GetStatusReasonsForCaregiver
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetStatusReasonsForCaregiver = function(GetStatusReasonsForCaregiver, callback) {
      _soapModel.GetStatusReasonsForCaregiver(normalize(GetStatusReasonsForCaregiver), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetBranches
   * @param {GetBranches} GetBranches GetBranches
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetBranches = function(GetBranches, callback) {
      _soapModel.GetBranches(normalize(GetBranches), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetLocations
   * @param {GetLocations} GetLocations GetLocations
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetLocations = function(GetLocations, callback) {
      _soapModel.GetLocations(normalize(GetLocations), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetNurses
   * @param {GetNurses} GetNurses GetNurses
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetNurses = function(GetNurses, callback) {
      _soapModel.GetNurses(normalize(GetNurses), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetMobilityStatuses
   * @param {GetMobilityStatuses} GetMobilityStatuses GetMobilityStatuses
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetMobilityStatuses = function(GetMobilityStatuses, callback) {
      _soapModel.GetMobilityStatuses(normalize(GetMobilityStatuses), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetEvacuationZones
   * @param {GetEvacuationZones} GetEvacuationZones GetEvacuationZones
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetEvacuationZones = function(GetEvacuationZones, callback) {
      _soapModel.GetEvacuationZones(normalize(GetEvacuationZones), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetEmergencyContactRelationships
   * @param {GetEmergencyContactRelationships} GetEmergencyContactRelationships GetEmergencyContactRelationships
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetEmergencyContactRelationships = function(GetEmergencyContactRelationships, callback) {
      _soapModel.GetEmergencyContactRelationships(normalize(GetEmergencyContactRelationships), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPatientTeams
   * @param {GetPatientTeams} GetPatientTeams GetPatientTeams
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPatientTeams = function(GetPatientTeams, callback) {
      _soapModel.GetPatientTeams(normalize(GetPatientTeams), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverTeams
   * @param {GetCaregiverTeams} GetCaregiverTeams GetCaregiverTeams
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverTeams = function(GetCaregiverTeams, callback) {
      _soapModel.GetCaregiverTeams(normalize(GetCaregiverTeams), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetEvacuationLocations
   * @param {GetEvacuationLocations} GetEvacuationLocations GetEvacuationLocations
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetEvacuationLocations = function(GetEvacuationLocations, callback) {
      _soapModel.GetEvacuationLocations(normalize(GetEvacuationLocations), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPatientDischargeTo
   * @param {GetPatientDischargeTo} GetPatientDischargeTo GetPatientDischargeTo
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPatientDischargeTo = function(GetPatientDischargeTo, callback) {
      _soapModel.GetPatientDischargeTo(normalize(GetPatientDischargeTo), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverNotificationMethods
   * @param {GetCaregiverNotificationMethods} GetCaregiverNotificationMethods GetCaregiverNotificationMethods
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverNotificationMethods = function(GetCaregiverNotificationMethods, callback) {
      _soapModel.GetCaregiverNotificationMethods(normalize(GetCaregiverNotificationMethods), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverCityTaxes
   * @param {GetCaregiverCityTaxes} GetCaregiverCityTaxes GetCaregiverCityTaxes
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverCityTaxes = function(GetCaregiverCityTaxes, callback) {
      _soapModel.GetCaregiverCityTaxes(normalize(GetCaregiverCityTaxes), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCollectionARNoteReasons
   * @param {GetCollectionARNoteReasons} GetCollectionARNoteReasons GetCollectionARNoteReasons
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCollectionARNoteReasons = function(GetCollectionARNoteReasons, callback) {
      _soapModel.GetCollectionARNoteReasons(normalize(GetCollectionARNoteReasons), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCollectionRepresentatives
   * @param {GetCollectionRepresentatives} GetCollectionRepresentatives GetCollectionRepresentatives
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCollectionRepresentatives = function(GetCollectionRepresentatives, callback) {
      _soapModel.GetCollectionRepresentatives(normalize(GetCollectionRepresentatives), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCollectionFollowUpRepresentatives
   * @param {GetCollectionFollowUpRepresentatives} GetCollectionFollowUpRepresentatives GetCollectionFollowUpRepresentatives
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCollectionFollowUpRepresentatives = function(GetCollectionFollowUpRepresentatives, callback) {
      _soapModel.GetCollectionFollowUpRepresentatives(normalize(GetCollectionFollowUpRepresentatives), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCollectionStatus
   * @param {GetCollectionStatus} GetCollectionStatus GetCollectionStatus
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCollectionStatus = function(GetCollectionStatus, callback) {
      _soapModel.GetCollectionStatus(normalize(GetCollectionStatus), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCollectionClaimStatus
   * @param {GetCollectionClaimStatus} GetCollectionClaimStatus GetCollectionClaimStatus
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCollectionClaimStatus = function(GetCollectionClaimStatus, callback) {
      _soapModel.GetCollectionClaimStatus(normalize(GetCollectionClaimStatus), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCollectionReasonForNonPayment
   * @param {GetCollectionReasonForNonPayment} GetCollectionReasonForNonPayment GetCollectionReasonForNonPayment
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCollectionReasonForNonPayment = function(GetCollectionReasonForNonPayment, callback) {
      _soapModel.GetCollectionReasonForNonPayment(normalize(GetCollectionReasonForNonPayment), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPayrollTaxTypes
   * @param {GetPayrollTaxTypes} GetPayrollTaxTypes GetPayrollTaxTypes
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPayrollTaxTypes = function(GetPayrollTaxTypes, callback) {
      _soapModel.GetPayrollTaxTypes(normalize(GetPayrollTaxTypes), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPayrollTaxLocations
   * @param {GetPayrollTaxLocations} GetPayrollTaxLocations GetPayrollTaxLocations
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPayrollTaxLocations = function(GetPayrollTaxLocations, callback) {
      _soapModel.GetPayrollTaxLocations(normalize(GetPayrollTaxLocations), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPayrollStateFillingStatus
   * @param {GetPayrollStateFillingStatus} GetPayrollStateFillingStatus GetPayrollStateFillingStatus
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPayrollStateFillingStatus = function(GetPayrollStateFillingStatus, callback) {
      _soapModel.GetPayrollStateFillingStatus(normalize(GetPayrollStateFillingStatus), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPayrollFederalFillingStatus
   * @param {GetPayrollFederalFillingStatus} GetPayrollFederalFillingStatus GetPayrollFederalFillingStatus
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPayrollFederalFillingStatus = function(GetPayrollFederalFillingStatus, callback) {
      _soapModel.GetPayrollFederalFillingStatus(normalize(GetPayrollFederalFillingStatus), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetPayrollCostCenters
   * @param {GetPayrollCostCenters} GetPayrollCostCenters GetPayrollCostCenters
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetPayrollCostCenters = function(GetPayrollCostCenters, callback) {
      _soapModel.GetPayrollCostCenters(normalize(GetPayrollCostCenters), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverOtherCompliance
   * @param {GetCaregiverOtherCompliance} GetCaregiverOtherCompliance GetCaregiverOtherCompliance
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverOtherCompliance = function(GetCaregiverOtherCompliance, callback) {
      _soapModel.GetCaregiverOtherCompliance(normalize(GetCaregiverOtherCompliance), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverMedicals
   * @param {GetCaregiverMedicals} GetCaregiverMedicals GetCaregiverMedicals
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverMedicals = function(GetCaregiverMedicals, callback) {
      _soapModel.GetCaregiverMedicals(normalize(GetCaregiverMedicals), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverMedicalResults
   * @param {GetCaregiverMedicalResults} GetCaregiverMedicalResults GetCaregiverMedicalResults
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverMedicalResults = function(GetCaregiverMedicalResults, callback) {
      _soapModel.GetCaregiverMedicalResults(normalize(GetCaregiverMedicalResults), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetCaregiverOtherComplianceResults
   * @param {GetCaregiverOtherComplianceResults} GetCaregiverOtherComplianceResults GetCaregiverOtherComplianceResults
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetCaregiverOtherComplianceResults = function(GetCaregiverOtherComplianceResults, callback) {
      _soapModel.GetCaregiverOtherComplianceResults(normalize(GetCaregiverOtherComplianceResults), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetElectricEquipments
   * @param {GetElectricEquipments} GetElectricEquipments GetElectricEquipments
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetElectricEquipments = function(GetElectricEquipments, callback) {
      _soapModel.GetElectricEquipments(normalize(GetElectricEquipments), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetEthnicity
   * @param {GetEthnicity} GetEthnicity GetEthnicity
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetEthnicity = function(GetEthnicity, callback) {
      _soapModel.GetEthnicity(normalize(GetEthnicity), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetContractServiceCode
   * @param {GetContractServiceCode} GetContractServiceCode GetContractServiceCode
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetContractServiceCode = function(GetContractServiceCode, callback) {
      _soapModel.GetContractServiceCode(normalize(GetContractServiceCode), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetLinkedContractServiceCodes
   * @param {GetLinkedContractServiceCodes} GetLinkedContractServiceCodes GetLinkedContractServiceCodes
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetLinkedContractServiceCodes = function(GetLinkedContractServiceCodes, callback) {
      _soapModel.GetLinkedContractServiceCodes(normalize(GetLinkedContractServiceCodes), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  /**
   * GetDisciplines
   * @param {GetDisciplines} GetDisciplines GetDisciplines
   * @callback {Function} callback Callback function
   * @returns {any} callback containing error or result. Result is the response/soap body in JSON form.
   */
  wswsSoap.GetDisciplines = function(GetDisciplines, callback) {
      _soapModel.GetDisciplines(normalize(GetDisciplines), function (err, response) {
        var result = response;
        callback(err, result);
      });
  }
  
  // Map to REST/HTTP

  wswsSoap.remoteMethod('GetEvaluationCodes',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetEvaluationCodes',
      type: 'GetEvaluationCodes',
      description: 'GetEvaluationCodes',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetEvaluationCodesResponse',
      description: 'GetEvaluationCodesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetEvaluationCodes' },
  description: 'GetEvaluationCodes'
}
  );
  
  wswsSoap.remoteMethod('GetInServiceTopics',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetInServiceTopics',
      type: 'GetInServiceTopics',
      description: 'GetInServiceTopics',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetInServiceTopicsResponse',
      description: 'GetInServiceTopicsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetInServiceTopics' },
  description: 'GetInServiceTopics'
}
  );
  
  wswsSoap.remoteMethod('GetInServiceInstructors',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetInServiceInstructors',
      type: 'GetInServiceInstructors',
      description: 'GetInServiceInstructors',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetInServiceInstructorsResponse',
      description: 'GetInServiceInstructorsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetInServiceInstructors' },
  description: 'GetInServiceInstructors'
}
  );
  
  wswsSoap.remoteMethod('GetInServiceNoShowReason',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetInServiceNoShowReason',
      type: 'GetInServiceNoShowReason',
      description: 'GetInServiceNoShowReason',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetInServiceNoShowReasonResponse',
      description: 'GetInServiceNoShowReasonResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetInServiceNoShowReason' },
  description: 'GetInServiceNoShowReason'
}
  );
  
  wswsSoap.remoteMethod('GetPOCTasks',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPOCTasks',
      type: 'GetPOCTasks',
      description: 'GetPOCTasks',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPOCTasksResponse',
      description: 'GetPOCTasksResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPOCTasks' },
  description: 'GetPOCTasks'
}
  );
  
  wswsSoap.remoteMethod('GetVisitDeleteReasons',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetVisitDeleteReasons',
      type: 'GetVisitDeleteReasons',
      description: 'GetVisitDeleteReasons',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetVisitDeleteReasonsResponse',
      description: 'GetVisitDeleteReasonsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetVisitDeleteReasons' },
  description: 'GetVisitDeleteReasons'
}
  );
  
  wswsSoap.remoteMethod('GetPayers',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPayers',
      type: 'GetPayers',
      description: 'GetPayers',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPayersResponse',
      description: 'GetPayersResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPayers' },
  description: 'GetPayers'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverDocumentType',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverDocumentType',
      type: 'GetCaregiverDocumentType',
      description: 'GetCaregiverDocumentType',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverDocumentTypeResponse',
      description: 'GetCaregiverDocumentTypeResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverDocumentType' },
  description: 'GetCaregiverDocumentType'
}
  );
  
  wswsSoap.remoteMethod('GetGenders',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetGenders',
      type: 'GetGenders',
      description: 'GetGenders',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetGendersResponse',
      description: 'GetGendersResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetGenders' },
  description: 'GetGenders'
}
  );
  
  wswsSoap.remoteMethod('GetContractDischargeReason',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetContractDischargeReason',
      type: 'GetContractDischargeReason',
      description: 'GetContractDischargeReason',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetContractDischargeReasonResponse',
      description: 'GetContractDischargeReasonResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetContractDischargeReason' },
  description: 'GetContractDischargeReason'
}
  );
  
  wswsSoap.remoteMethod('GetReferralStatus',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetReferralStatus',
      type: 'GetReferralStatus',
      description: 'GetReferralStatus',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetReferralStatusResponse',
      description: 'GetReferralStatusResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetReferralStatus' },
  description: 'GetReferralStatus'
}
  );
  
  wswsSoap.remoteMethod('GetReferralSalesStaff',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetReferralSalesStaff',
      type: 'GetReferralSalesStaff',
      description: 'GetReferralSalesStaff',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetReferralSalesStaffResponse',
      description: 'GetReferralSalesStaffResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetReferralSalesStaff' },
  description: 'GetReferralSalesStaff'
}
  );
  
  wswsSoap.remoteMethod('GetReferralSourceContact',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetReferralSourceContact',
      type: 'GetReferralSourceContact',
      description: 'GetReferralSourceContact',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetReferralSourceContactResponse',
      description: 'GetReferralSourceContactResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetReferralSourceContact' },
  description: 'GetReferralSourceContact'
}
  );
  
  wswsSoap.remoteMethod('GetReferralLostReason',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetReferralLostReason',
      type: 'GetReferralLostReason',
      description: 'GetReferralLostReason',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetReferralLostReasonResponse',
      description: 'GetReferralLostReasonResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetReferralLostReason' },
  description: 'GetReferralLostReason'
}
  );
  
  wswsSoap.remoteMethod('GetReferralSourceType',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetReferralSourceType',
      type: 'GetReferralSourceType',
      description: 'GetReferralSourceType',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetReferralSourceTypeResponse',
      description: 'GetReferralSourceTypeResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetReferralSourceType' },
  description: 'GetReferralSourceType'
}
  );
  
  wswsSoap.remoteMethod('GetMissedVisitReasons',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetMissedVisitReasons',
      type: 'GetMissedVisitReasons',
      description: 'GetMissedVisitReasons',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetMissedVisitReasonsResponse',
      description: 'GetMissedVisitReasonsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetMissedVisitReasons' },
  description: 'GetMissedVisitReasons'
}
  );
  
  wswsSoap.remoteMethod('GetMissedVisitActionTaken',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetMissedVisitActionTaken',
      type: 'GetMissedVisitActionTaken',
      description: 'GetMissedVisitActionTaken',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetMissedVisitActionTakenResponse',
      description: 'GetMissedVisitActionTakenResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetMissedVisitActionTaken' },
  description: 'GetMissedVisitActionTaken'
}
  );
  
  wswsSoap.remoteMethod('GetRefusedDutyReason',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetRefusedDutyReason',
      type: 'GetRefusedDutyReason',
      description: 'GetRefusedDutyReason',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetRefusedDutyReasonResponse',
      description: 'GetRefusedDutyReasonResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetRefusedDutyReason' },
  description: 'GetRefusedDutyReason'
}
  );
  
  wswsSoap.remoteMethod('GetI9ColumnCDocument',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetI9ColumnCDocument',
      type: 'GetI9ColumnCDocument',
      description: 'GetI9ColumnCDocument',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetI9ColumnCDocumentResponse',
      description: 'GetI9ColumnCDocumentResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetI9ColumnCDocument' },
  description: 'GetI9ColumnCDocument'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverPTOAccrualTypes',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverPTOAccrualTypes',
      type: 'GetCaregiverPTOAccrualTypes',
      description: 'GetCaregiverPTOAccrualTypes',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverPTOAccrualTypesResponse',
      description: 'GetCaregiverPTOAccrualTypesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverPTOAccrualTypes' },
  description: 'GetCaregiverPTOAccrualTypes'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverGender',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverGender',
      type: 'GetCaregiverGender',
      description: 'GetCaregiverGender',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverGenderResponse',
      description: 'GetCaregiverGenderResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverGender' },
  description: 'GetCaregiverGender'
}
  );
  
  wswsSoap.remoteMethod('GetPatientCaregiverPreferences',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPatientCaregiverPreferences',
      type: 'GetPatientCaregiverPreferences',
      description: 'GetPatientCaregiverPreferences',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPatientCaregiverPreferencesResponse',
      description: 'GetPatientCaregiverPreferencesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPatientCaregiverPreferences' },
  description: 'GetPatientCaregiverPreferences'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverGenderForPatientPreference',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverGenderForPatientPreference',
      type: 'GetCaregiverGenderForPatientPreference',
      description: 'GetCaregiverGenderForPatientPreference',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverGenderForPatientPreferenceResponse',
      description: 'GetCaregiverGenderForPatientPreferenceResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverGenderForPatientPreference' },
  description: 'GetCaregiverGenderForPatientPreference'
}
  );
  
  wswsSoap.remoteMethod('SearchPhoneNumber',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'SearchPhoneNumber',
      type: 'SearchPhoneNumber',
      description: 'SearchPhoneNumber',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'SearchPhoneNumberResponse',
      description: 'SearchPhoneNumberResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/SearchPhoneNumber' },
  description: 'SearchPhoneNumber'
}
  );
  
  wswsSoap.remoteMethod('GetPatientChanges',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPatientChanges',
      type: 'GetPatientChanges',
      description: 'GetPatientChanges',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPatientChangesResponse',
      description: 'GetPatientChangesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPatientChanges' },
  description: 'GetPatientChanges'
}
  );
  
  wswsSoap.remoteMethod('GetPatientChangesV2',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPatientChangesV2',
      type: 'GetPatientChangesV2',
      description: 'GetPatientChangesV2',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPatientChangesV2Response',
      description: 'GetPatientChangesV2Response',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPatientChangesV2' },
  description: 'GetPatientChangesV2'
}
  );
  
  wswsSoap.remoteMethod('GetPatientContractChanges',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPatientContractChanges',
      type: 'GetPatientContractChanges',
      description: 'GetPatientContractChanges',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPatientContractChangesResponse',
      description: 'GetPatientContractChangesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPatientContractChanges' },
  description: 'GetPatientContractChanges'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverChanges',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverChanges',
      type: 'GetCaregiverChanges',
      description: 'GetCaregiverChanges',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverChangesResponse',
      description: 'GetCaregiverChangesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverChanges' },
  description: 'GetCaregiverChanges'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverAbsenceChanges',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverAbsenceChanges',
      type: 'GetCaregiverAbsenceChanges',
      description: 'GetCaregiverAbsenceChanges',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverAbsenceChangesResponse',
      description: 'GetCaregiverAbsenceChangesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverAbsenceChanges' },
  description: 'GetCaregiverAbsenceChanges'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverSpecialAvailabilityChanges',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverSpecialAvailabilityChanges',
      type: 'GetCaregiverSpecialAvailabilityChanges',
      description: 'GetCaregiverSpecialAvailabilityChanges',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverSpecialAvailabilityChangesResponse',
      description: 'GetCaregiverSpecialAvailabilityChangesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverSpecialAvailabilityChanges' },
  description: 'GetCaregiverSpecialAvailabilityChanges'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverPermanentWeekAvailabilityChanges',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverPermanentWeekAvailabilityChanges',
      type: 'GetCaregiverPermanentWeekAvailabilityChanges',
      description: 'GetCaregiverPermanentWeekAvailabilityChanges',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverPermanentWeekAvailabilityChangesResponse',
      description: 'GetCaregiverPermanentWeekAvailabilityChangesResponse',
      root: true
    }
  ],
  http: {
    verb: 'post',
    path: '/GetCaregiverPermanentWeekAvailabilityChanges'
  },
  description: 'GetCaregiverPermanentWeekAvailabilityChanges'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverPreferenceChanges',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverPreferenceChanges',
      type: 'GetCaregiverPreferenceChanges',
      description: 'GetCaregiverPreferenceChanges',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverPreferenceChangesResponse',
      description: 'GetCaregiverPreferenceChangesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverPreferenceChanges' },
  description: 'GetCaregiverPreferenceChanges'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverPayrollInfoChanges',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverPayrollInfoChanges',
      type: 'GetCaregiverPayrollInfoChanges',
      description: 'GetCaregiverPayrollInfoChanges',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverPayrollInfoChangesResponse',
      description: 'GetCaregiverPayrollInfoChangesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverPayrollInfoChanges' },
  description: 'GetCaregiverPayrollInfoChanges'
}
  );
  
  wswsSoap.remoteMethod('GetPatientNoteChanges',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPatientNoteChanges',
      type: 'GetPatientNoteChanges',
      description: 'GetPatientNoteChanges',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPatientNoteChangesResponse',
      description: 'GetPatientNoteChangesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPatientNoteChanges' },
  description: 'GetPatientNoteChanges'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverNoteChanges',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverNoteChanges',
      type: 'GetCaregiverNoteChanges',
      description: 'GetCaregiverNoteChanges',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverNoteChangesResponse',
      description: 'GetCaregiverNoteChangesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverNoteChanges' },
  description: 'GetCaregiverNoteChanges'
}
  );
  
  wswsSoap.remoteMethod('GetCallDashBoardData',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCallDashBoardData',
      type: 'GetCallDashBoardData',
      description: 'GetCallDashBoardData',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCallDashBoardDataResponse',
      description: 'GetCallDashBoardDataResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCallDashBoardData' },
  description: 'GetCallDashBoardData'
}
  );
  
  wswsSoap.remoteMethod('SearchPayrollBatches',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'SearchPayrollBatches',
      type: 'SearchPayrollBatches',
      description: 'SearchPayrollBatches',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'SearchPayrollBatchesResponse',
      description: 'SearchPayrollBatchesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/SearchPayrollBatches' },
  description: 'SearchPayrollBatches'
}
  );
  
  wswsSoap.remoteMethod('GetPayrollBatchDetails',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPayrollBatchDetails',
      type: 'GetPayrollBatchDetails',
      description: 'GetPayrollBatchDetails',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPayrollBatchDetailsResponse',
      description: 'GetPayrollBatchDetailsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPayrollBatchDetails' },
  description: 'GetPayrollBatchDetails'
}
  );
  
  wswsSoap.remoteMethod('SearchPayrollBatchCaregivers',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'SearchPayrollBatchCaregivers',
      type: 'SearchPayrollBatchCaregivers',
      description: 'SearchPayrollBatchCaregivers',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'SearchPayrollBatchCaregiversResponse',
      description: 'SearchPayrollBatchCaregiversResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/SearchPayrollBatchCaregivers' },
  description: 'SearchPayrollBatchCaregivers'
}
  );
  
  wswsSoap.remoteMethod('SearchBilledVisits',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'SearchBilledVisits',
      type: 'SearchBilledVisits',
      description: 'SearchBilledVisits',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'SearchBilledVisitsResponse',
      description: 'SearchBilledVisitsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/SearchBilledVisits' },
  description: 'SearchBilledVisits'
}
  );
  
  wswsSoap.remoteMethod('AddCollectionNote',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'AddCollectionNote',
      type: 'AddCollectionNote',
      description: 'AddCollectionNote',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'AddCollectionNoteResponse',
      description: 'AddCollectionNoteResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/AddCollectionNote' },
  description: 'AddCollectionNote'
}
  );
  
  wswsSoap.remoteMethod('GetCollectionNotes',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCollectionNotes',
      type: 'GetCollectionNotes',
      description: 'GetCollectionNotes',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCollectionNotesResponse',
      description: 'GetCollectionNotesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCollectionNotes' },
  description: 'GetCollectionNotes'
}
  );
  
  wswsSoap.remoteMethod('UpdateCaregiverMedicalProfileCustom',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'UpdateCaregiverMedicalProfileCustom',
      type: 'UpdateCaregiverMedicalProfileCustom',
      description: 'UpdateCaregiverMedicalProfileCustom',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'UpdateCaregiverMedicalProfileCustomResponse',
      description: 'UpdateCaregiverMedicalProfileCustomResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/UpdateCaregiverMedicalProfileCustom' },
  description: 'UpdateCaregiverMedicalProfileCustom'
}
  );
  
  wswsSoap.remoteMethod('VisitCallInOut',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'VisitCallInOut',
      type: 'VisitCallInOut',
      description: 'VisitCallInOut',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'VisitCallInOutResponse',
      description: 'VisitCallInOutResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/VisitCallInOut' },
  description: 'VisitCallInOut'
}
  );
  
  wswsSoap.remoteMethod('SearchVisits',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'SearchVisits',
      type: 'SearchVisits',
      description: 'SearchVisits',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'SearchVisitsResponse',
      description: 'SearchVisitsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/SearchVisits' },
  description: 'SearchVisits'
}
  );
  
  wswsSoap.remoteMethod('GetScheduleInfo',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetScheduleInfo',
      type: 'GetScheduleInfo',
      description: 'GetScheduleInfo',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetScheduleInfoResponse',
      description: 'GetScheduleInfoResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetScheduleInfo' },
  description: 'GetScheduleInfo'
}
  );
  
  wswsSoap.remoteMethod('DeleteVisit',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'DeleteVisit',
      type: 'DeleteVisit',
      description: 'DeleteVisit',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'DeleteVisitResponse',
      description: 'DeleteVisitResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/DeleteVisit' },
  description: 'DeleteVisit'
}
  );
  
  wswsSoap.remoteMethod('GetMasterWeeks',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetMasterWeeks',
      type: 'GetMasterWeeks',
      description: 'GetMasterWeeks',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetMasterWeeksResponse',
      description: 'GetMasterWeeksResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetMasterWeeks' },
  description: 'GetMasterWeeks'
}
  );
  
  wswsSoap.remoteMethod('CreateSchedule',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'CreateSchedule',
      type: 'CreateSchedule',
      description: 'CreateSchedule',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'CreateScheduleResponse',
      description: 'CreateScheduleResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/CreateSchedule' },
  description: 'CreateSchedule'
}
  );
  
  wswsSoap.remoteMethod('UpdateSchedule',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'UpdateSchedule',
      type: 'UpdateSchedule',
      description: 'UpdateSchedule',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'UpdateScheduleResponse',
      description: 'UpdateScheduleResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/UpdateSchedule' },
  description: 'UpdateSchedule'
}
  );
  
  wswsSoap.remoteMethod('CreateLinkedSchedule',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'CreateLinkedSchedule',
      type: 'CreateLinkedSchedule',
      description: 'CreateLinkedSchedule',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'CreateLinkedScheduleResponse',
      description: 'CreateLinkedScheduleResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/CreateLinkedSchedule' },
  description: 'CreateLinkedSchedule'
}
  );
  
  wswsSoap.remoteMethod('UpdateLinkedSchedule',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'UpdateLinkedSchedule',
      type: 'UpdateLinkedSchedule',
      description: 'UpdateLinkedSchedule',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'UpdateLinkedScheduleResponse',
      description: 'UpdateLinkedScheduleResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/UpdateLinkedSchedule' },
  description: 'UpdateLinkedSchedule'
}
  );
  
  wswsSoap.remoteMethod('GetVisitInfo',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetVisitInfo',
      type: 'GetVisitInfo',
      description: 'GetVisitInfo',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetVisitInfoResponse',
      description: 'GetVisitInfoResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetVisitInfo' },
  description: 'GetVisitInfo'
}
  );
  
  wswsSoap.remoteMethod('GetVisitBillInfo',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetVisitBillInfo',
      type: 'GetVisitBillInfo',
      description: 'GetVisitBillInfo',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetVisitBillInfoResponse',
      description: 'GetVisitBillInfoResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetVisitBillInfo' },
  description: 'GetVisitBillInfo'
}
  );
  
  wswsSoap.remoteMethod('GetVisitPayrollInfo',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetVisitPayrollInfo',
      type: 'GetVisitPayrollInfo',
      description: 'GetVisitPayrollInfo',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetVisitPayrollInfoResponse',
      description: 'GetVisitPayrollInfoResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetVisitPayrollInfo' },
  description: 'GetVisitPayrollInfo'
}
  );
  
  wswsSoap.remoteMethod('GetLinkedScheduleInfo',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetLinkedScheduleInfo',
      type: 'GetLinkedScheduleInfo',
      description: 'GetLinkedScheduleInfo',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetLinkedScheduleInfoResponse',
      description: 'GetLinkedScheduleInfoResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetLinkedScheduleInfo' },
  description: 'GetLinkedScheduleInfo'
}
  );
  
  wswsSoap.remoteMethod('GetVisitInfoV2',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetVisitInfoV2',
      type: 'GetVisitInfoV2',
      description: 'GetVisitInfoV2',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetVisitInfoV2Response',
      description: 'GetVisitInfoV2Response',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetVisitInfoV2' },
  description: 'GetVisitInfoV2'
}
  );
  
  wswsSoap.remoteMethod('ConfirmVisitsV2',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'ConfirmVisitsV2',
      type: 'ConfirmVisitsV2',
      description: 'ConfirmVisitsV2',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'ConfirmVisitsV2Response',
      description: 'ConfirmVisitsV2Response',
      root: true
    }
  ],
  http: { verb: 'post', path: '/ConfirmVisitsV2' },
  description: 'ConfirmVisitsV2'
}
  );
  
  wswsSoap.remoteMethod('ConfirmVisits',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'ConfirmVisits',
      type: 'ConfirmVisits',
      description: 'ConfirmVisits',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'ConfirmVisitsResponse',
      description: 'ConfirmVisitsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/ConfirmVisits' },
  description: 'ConfirmVisits'
}
  );
  
  wswsSoap.remoteMethod('ConfirmVisitsEVV',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'ConfirmVisitsEVV',
      type: 'ConfirmVisitsEVV',
      description: 'ConfirmVisitsEVV',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'ConfirmVisitsEVVResponse',
      description: 'ConfirmVisitsEVVResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/ConfirmVisitsEVV' },
  description: 'ConfirmVisitsEVV'
}
  );
  
  wswsSoap.remoteMethod('CreatePatientNote',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'CreatePatientNote',
      type: 'CreatePatientNote',
      description: 'CreatePatientNote',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'CreatePatientNoteResponse',
      description: 'CreatePatientNoteResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/CreatePatientNote' },
  description: 'CreatePatientNote'
}
  );
  
  wswsSoap.remoteMethod('CreatePatient',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'CreatePatient',
      type: 'CreatePatient',
      description: 'CreatePatient',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'CreatePatientResponse',
      description: 'CreatePatientResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/CreatePatient' },
  description: 'CreatePatient'
}
  );
  
  wswsSoap.remoteMethod('UpdatePatientDemographics',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'UpdatePatientDemographics',
      type: 'UpdatePatientDemographics',
      description: 'UpdatePatientDemographics',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'UpdatePatientDemographicsResponse',
      description: 'UpdatePatientDemographicsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/UpdatePatientDemographics' },
  description: 'UpdatePatientDemographics'
}
  );
  
  wswsSoap.remoteMethod('GetPatientDemographics',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPatientDemographics',
      type: 'GetPatientDemographics',
      description: 'GetPatientDemographics',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPatientDemographicsResponse',
      description: 'GetPatientDemographicsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPatientDemographics' },
  description: 'GetPatientDemographics'
}
  );
  
  wswsSoap.remoteMethod('SearchPatients',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'SearchPatients',
      type: 'SearchPatients',
      description: 'SearchPatients',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'SearchPatientsResponse',
      description: 'SearchPatientsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/SearchPatients' },
  description: 'SearchPatients'
}
  );
  
  wswsSoap.remoteMethod('GetPatientContracts',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPatientContracts',
      type: 'GetPatientContracts',
      description: 'GetPatientContracts',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPatientContractsResponse',
      description: 'GetPatientContractsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPatientContracts' },
  description: 'GetPatientContracts'
}
  );
  
  wswsSoap.remoteMethod('GetPatientNotes',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPatientNotes',
      type: 'GetPatientNotes',
      description: 'GetPatientNotes',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPatientNotesResponse',
      description: 'GetPatientNotesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPatientNotes' },
  description: 'GetPatientNotes'
}
  );
  
  wswsSoap.remoteMethod('SearchPatientPOC',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'SearchPatientPOC',
      type: 'SearchPatientPOC',
      description: 'SearchPatientPOC',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'SearchPatientPOCResponse',
      description: 'SearchPatientPOCResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/SearchPatientPOC' },
  description: 'SearchPatientPOC'
}
  );
  
  wswsSoap.remoteMethod('GetPatientPOCInfo',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPatientPOCInfo',
      type: 'GetPatientPOCInfo',
      description: 'GetPatientPOCInfo',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPatientPOCInfoResponse',
      description: 'GetPatientPOCInfoResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPatientPOCInfo' },
  description: 'GetPatientPOCInfo'
}
  );
  
  wswsSoap.remoteMethod('SearchPatientAuthorizations',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'SearchPatientAuthorizations',
      type: 'SearchPatientAuthorizations',
      description: 'SearchPatientAuthorizations',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'SearchPatientAuthorizationsResponse',
      description: 'SearchPatientAuthorizationsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/SearchPatientAuthorizations' },
  description: 'SearchPatientAuthorizations'
}
  );
  
  wswsSoap.remoteMethod('GetPatientAuthorizationInfo',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPatientAuthorizationInfo',
      type: 'GetPatientAuthorizationInfo',
      description: 'GetPatientAuthorizationInfo',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPatientAuthorizationInfoResponse',
      description: 'GetPatientAuthorizationInfoResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPatientAuthorizationInfo' },
  description: 'GetPatientAuthorizationInfo'
}
  );
  
  wswsSoap.remoteMethod('GetPatientDisciplines',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPatientDisciplines',
      type: 'GetPatientDisciplines',
      description: 'GetPatientDisciplines',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPatientDisciplinesResponse',
      description: 'GetPatientDisciplinesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPatientDisciplines' },
  description: 'GetPatientDisciplines'
}
  );
  
  wswsSoap.remoteMethod('CreatePatientAuthorization',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'CreatePatientAuthorization',
      type: 'CreatePatientAuthorization',
      description: 'CreatePatientAuthorization',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'CreatePatientAuthorizationResponse',
      description: 'CreatePatientAuthorizationResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/CreatePatientAuthorization' },
  description: 'CreatePatientAuthorization'
}
  );
  
  wswsSoap.remoteMethod('UpdatePatientAuthorization',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'UpdatePatientAuthorization',
      type: 'UpdatePatientAuthorization',
      description: 'UpdatePatientAuthorization',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'UpdatePatientAuthorizationResponse',
      description: 'UpdatePatientAuthorizationResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/UpdatePatientAuthorization' },
  description: 'UpdatePatientAuthorization'
}
  );
  
  wswsSoap.remoteMethod('CreatePatientPOC',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'CreatePatientPOC',
      type: 'CreatePatientPOC',
      description: 'CreatePatientPOC',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'CreatePatientPOCResponse',
      description: 'CreatePatientPOCResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/CreatePatientPOC' },
  description: 'CreatePatientPOC'
}
  );
  
  wswsSoap.remoteMethod('UpdatePatientPOC',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'UpdatePatientPOC',
      type: 'UpdatePatientPOC',
      description: 'UpdatePatientPOC',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'UpdatePatientPOCResponse',
      description: 'UpdatePatientPOCResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/UpdatePatientPOC' },
  description: 'UpdatePatientPOC'
}
  );
  
  wswsSoap.remoteMethod('AddPatientContract',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'AddPatientContract',
      type: 'AddPatientContract',
      description: 'AddPatientContract',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'AddPatientContractResponse',
      description: 'AddPatientContractResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/AddPatientContract' },
  description: 'AddPatientContract'
}
  );
  
  wswsSoap.remoteMethod('GetPatientDocumentType',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPatientDocumentType',
      type: 'GetPatientDocumentType',
      description: 'GetPatientDocumentType',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPatientDocumentTypeResponse',
      description: 'GetPatientDocumentTypeResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPatientDocumentType' },
  description: 'GetPatientDocumentType'
}
  );
  
  wswsSoap.remoteMethod('SearchPatientDocument',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'SearchPatientDocument',
      type: 'SearchPatientDocument',
      description: 'SearchPatientDocument',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'SearchPatientDocumentResponse',
      description: 'SearchPatientDocumentResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/SearchPatientDocument' },
  description: 'SearchPatientDocument'
}
  );
  
  wswsSoap.remoteMethod('AddPatientDocument',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'AddPatientDocument',
      type: 'AddPatientDocument',
      description: 'AddPatientDocument',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'AddPatientDocumentResponse',
      description: 'AddPatientDocumentResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/AddPatientDocument' },
  description: 'AddPatientDocument'
}
  );
  
  wswsSoap.remoteMethod('UpdatePatientDocument',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'UpdatePatientDocument',
      type: 'UpdatePatientDocument',
      description: 'UpdatePatientDocument',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'UpdatePatientDocumentResponse',
      description: 'UpdatePatientDocumentResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/UpdatePatientDocument' },
  description: 'UpdatePatientDocument'
}
  );
  
  wswsSoap.remoteMethod('DeletePatientDocument',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'DeletePatientDocument',
      type: 'DeletePatientDocument',
      description: 'DeletePatientDocument',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'DeletePatientDocumentResponse',
      description: 'DeletePatientDocumentResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/DeletePatientDocument' },
  description: 'DeletePatientDocument'
}
  );
  
  wswsSoap.remoteMethod('DownloadPatientDocument',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'DownloadPatientDocument',
      type: 'DownloadPatientDocument',
      description: 'DownloadPatientDocument',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'DownloadPatientDocumentResponse',
      description: 'DownloadPatientDocumentResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/DownloadPatientDocument' },
  description: 'DownloadPatientDocument'
}
  );
  
  wswsSoap.remoteMethod('ChangePatientDocument',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'ChangePatientDocument',
      type: 'ChangePatientDocument',
      description: 'ChangePatientDocument',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'ChangePatientDocumentResponse',
      description: 'ChangePatientDocumentResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/ChangePatientDocument' },
  description: 'ChangePatientDocument'
}
  );
  
  wswsSoap.remoteMethod('UpdatePatientClinicalInfo',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'UpdatePatientClinicalInfo',
      type: 'UpdatePatientClinicalInfo',
      description: 'UpdatePatientClinicalInfo',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'UpdatePatientClinicalInfoResponse',
      description: 'UpdatePatientClinicalInfoResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/UpdatePatientClinicalInfo' },
  description: 'UpdatePatientClinicalInfo'
}
  );
  
  wswsSoap.remoteMethod('GetPatientClinicalInfo',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPatientClinicalInfo',
      type: 'GetPatientClinicalInfo',
      description: 'GetPatientClinicalInfo',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPatientClinicalInfoResponse',
      description: 'GetPatientClinicalInfoResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPatientClinicalInfo' },
  description: 'GetPatientClinicalInfo'
}
  );
  
  wswsSoap.remoteMethod('GetPatientReferralInfo',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPatientReferralInfo',
      type: 'GetPatientReferralInfo',
      description: 'GetPatientReferralInfo',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPatientReferralInfoResponse',
      description: 'GetPatientReferralInfoResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPatientReferralInfo' },
  description: 'GetPatientReferralInfo'
}
  );
  
  wswsSoap.remoteMethod('UpdatePatientContract',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'UpdatePatientContract',
      type: 'UpdatePatientContract',
      description: 'UpdatePatientContract',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'UpdatePatientContractResponse',
      description: 'UpdatePatientContractResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/UpdatePatientContract' },
  description: 'UpdatePatientContract'
}
  );
  
  wswsSoap.remoteMethod('GetReferralSource',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetReferralSource',
      type: 'GetReferralSource',
      description: 'GetReferralSource',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetReferralSourceResponse',
      description: 'GetReferralSourceResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetReferralSource' },
  description: 'GetReferralSource'
}
  );
  
  wswsSoap.remoteMethod('GetReferralProfile',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetReferralProfile',
      type: 'GetReferralProfile',
      description: 'GetReferralProfile',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetReferralProfileResponse',
      description: 'GetReferralProfileResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetReferralProfile' },
  description: 'GetReferralProfile'
}
  );
  
  wswsSoap.remoteMethod('UpdatePatientReferralInfo',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'UpdatePatientReferralInfo',
      type: 'UpdatePatientReferralInfo',
      description: 'UpdatePatientReferralInfo',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'UpdatePatientReferralInfoResponse',
      description: 'UpdatePatientReferralInfoResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/UpdatePatientReferralInfo' },
  description: 'UpdatePatientReferralInfo'
}
  );
  
  wswsSoap.remoteMethod('CreateReferralSource',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'CreateReferralSource',
      type: 'CreateReferralSource',
      description: 'CreateReferralSource',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'CreateReferralSourceResponse',
      description: 'CreateReferralSourceResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/CreateReferralSource' },
  description: 'CreateReferralSource'
}
  );
  
  wswsSoap.remoteMethod('GetPatientAddress',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPatientAddress',
      type: 'GetPatientAddress',
      description: 'GetPatientAddress',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPatientAddressResponse',
      description: 'GetPatientAddressResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPatientAddress' },
  description: 'GetPatientAddress'
}
  );
  
  wswsSoap.remoteMethod('GetPatientPreferences',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPatientPreferences',
      type: 'GetPatientPreferences',
      description: 'GetPatientPreferences',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPatientPreferencesResponse',
      description: 'GetPatientPreferencesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPatientPreferences' },
  description: 'GetPatientPreferences'
}
  );
  
  wswsSoap.remoteMethod('UpdatePatientPreference',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'UpdatePatientPreference',
      type: 'UpdatePatientPreference',
      description: 'UpdatePatientPreference',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'UpdatePatientPreferenceResponse',
      description: 'UpdatePatientPreferenceResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/UpdatePatientPreference' },
  description: 'UpdatePatientPreference'
}
  );
  
  wswsSoap.remoteMethod('CreateCaregiverNote',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'CreateCaregiverNote',
      type: 'CreateCaregiverNote',
      description: 'CreateCaregiverNote',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'CreateCaregiverNoteResponse',
      description: 'CreateCaregiverNoteResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/CreateCaregiverNote' },
  description: 'CreateCaregiverNote'
}
  );
  
  wswsSoap.remoteMethod('CreateCaregiverMedical',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'CreateCaregiverMedical',
      type: 'CreateCaregiverMedical',
      description: 'CreateCaregiverMedical',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'CreateCaregiverMedicalResponse',
      description: 'CreateCaregiverMedicalResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/CreateCaregiverMedical' },
  description: 'CreateCaregiverMedical'
}
  );
  
  wswsSoap.remoteMethod('CreateCaregiverOtherCompliance',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'CreateCaregiverOtherCompliance',
      type: 'CreateCaregiverOtherCompliance',
      description: 'CreateCaregiverOtherCompliance',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'CreateCaregiverOtherComplianceResponse',
      description: 'CreateCaregiverOtherComplianceResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/CreateCaregiverOtherCompliance' },
  description: 'CreateCaregiverOtherCompliance'
}
  );
  
  wswsSoap.remoteMethod('CreateCaregiver',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'CreateCaregiver',
      type: 'CreateCaregiver',
      description: 'CreateCaregiver',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'CreateCaregiverResponse',
      description: 'CreateCaregiverResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/CreateCaregiver' },
  description: 'CreateCaregiver'
}
  );
  
  wswsSoap.remoteMethod('UpdateCaregiverDemographics',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'UpdateCaregiverDemographics',
      type: 'UpdateCaregiverDemographics',
      description: 'UpdateCaregiverDemographics',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'UpdateCaregiverDemographicsResponse',
      description: 'UpdateCaregiverDemographicsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/UpdateCaregiverDemographics' },
  description: 'UpdateCaregiverDemographics'
}
  );
  
  wswsSoap.remoteMethod('SearchCaregivers',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'SearchCaregivers',
      type: 'SearchCaregivers',
      description: 'SearchCaregivers',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'SearchCaregiversResponse',
      description: 'SearchCaregiversResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/SearchCaregivers' },
  description: 'SearchCaregivers'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverDemographics',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverDemographics',
      type: 'GetCaregiverDemographics',
      description: 'GetCaregiverDemographics',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverDemographicsResponse',
      description: 'GetCaregiverDemographicsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverDemographics' },
  description: 'GetCaregiverDemographics'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverPermanentWeekAvailability',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverPermanentWeekAvailability',
      type: 'GetCaregiverPermanentWeekAvailability',
      description: 'GetCaregiverPermanentWeekAvailability',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverPermanentWeekAvailabilityResponse',
      description: 'GetCaregiverPermanentWeekAvailabilityResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverPermanentWeekAvailability' },
  description: 'GetCaregiverPermanentWeekAvailability'
}
  );
  
  wswsSoap.remoteMethod('AddCaregiverPermanentWeekAvailability',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'AddCaregiverPermanentWeekAvailability',
      type: 'AddCaregiverPermanentWeekAvailability',
      description: 'AddCaregiverPermanentWeekAvailability',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'AddCaregiverPermanentWeekAvailabilityResponse',
      description: 'AddCaregiverPermanentWeekAvailabilityResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/AddCaregiverPermanentWeekAvailability' },
  description: 'AddCaregiverPermanentWeekAvailability'
}
  );
  
  wswsSoap.remoteMethod('UpdateCaregiverPermanentWeekAvailability',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'UpdateCaregiverPermanentWeekAvailability',
      type: 'UpdateCaregiverPermanentWeekAvailability',
      description: 'UpdateCaregiverPermanentWeekAvailability',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'UpdateCaregiverPermanentWeekAvailabilityResponse',
      description: 'UpdateCaregiverPermanentWeekAvailabilityResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/UpdateCaregiverPermanentWeekAvailability' },
  description: 'UpdateCaregiverPermanentWeekAvailability'
}
  );
  
  wswsSoap.remoteMethod('UpdateCaregiverAvailabilityMaxVisits',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'UpdateCaregiverAvailabilityMaxVisits',
      type: 'UpdateCaregiverAvailabilityMaxVisits',
      description: 'UpdateCaregiverAvailabilityMaxVisits',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'UpdateCaregiverAvailabilityMaxVisitsResponse',
      description: 'UpdateCaregiverAvailabilityMaxVisitsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/UpdateCaregiverAvailabilityMaxVisits' },
  description: 'UpdateCaregiverAvailabilityMaxVisits'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverSpecialAvailability',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverSpecialAvailability',
      type: 'GetCaregiverSpecialAvailability',
      description: 'GetCaregiverSpecialAvailability',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverSpecialAvailabilityResponse',
      description: 'GetCaregiverSpecialAvailabilityResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverSpecialAvailability' },
  description: 'GetCaregiverSpecialAvailability'
}
  );
  
  wswsSoap.remoteMethod('AddCaregiverSpecialAvailability',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'AddCaregiverSpecialAvailability',
      type: 'AddCaregiverSpecialAvailability',
      description: 'AddCaregiverSpecialAvailability',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'AddCaregiverSpecialAvailabilityResponse',
      description: 'AddCaregiverSpecialAvailabilityResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/AddCaregiverSpecialAvailability' },
  description: 'AddCaregiverSpecialAvailability'
}
  );
  
  wswsSoap.remoteMethod('UpdateCaregiverSpecialAvailability',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'UpdateCaregiverSpecialAvailability',
      type: 'UpdateCaregiverSpecialAvailability',
      description: 'UpdateCaregiverSpecialAvailability',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'UpdateCaregiverSpecialAvailabilityResponse',
      description: 'UpdateCaregiverSpecialAvailabilityResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/UpdateCaregiverSpecialAvailability' },
  description: 'UpdateCaregiverSpecialAvailability'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverPayCodes',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverPayCodes',
      type: 'GetCaregiverPayCodes',
      description: 'GetCaregiverPayCodes',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverPayCodesResponse',
      description: 'GetCaregiverPayCodesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverPayCodes' },
  description: 'GetCaregiverPayCodes'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverNotes',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverNotes',
      type: 'GetCaregiverNotes',
      description: 'GetCaregiverNotes',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverNotesResponse',
      description: 'GetCaregiverNotesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverNotes' },
  description: 'GetCaregiverNotes'
}
  );
  
  wswsSoap.remoteMethod('AddCaregiverRate',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'AddCaregiverRate',
      type: 'AddCaregiverRate',
      description: 'AddCaregiverRate',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'AddCaregiverRateResponse',
      description: 'AddCaregiverRateResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/AddCaregiverRate' },
  description: 'AddCaregiverRate'
}
  );
  
  wswsSoap.remoteMethod('UpdateCaregiverRate',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'UpdateCaregiverRate',
      type: 'UpdateCaregiverRate',
      description: 'UpdateCaregiverRate',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'UpdateCaregiverRateResponse',
      description: 'UpdateCaregiverRateResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/UpdateCaregiverRate' },
  description: 'UpdateCaregiverRate'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverRates',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverRates',
      type: 'GetCaregiverRates',
      description: 'GetCaregiverRates',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverRatesResponse',
      description: 'GetCaregiverRatesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverRates' },
  description: 'GetCaregiverRates'
}
  );
  
  wswsSoap.remoteMethod('AddCaregiverTrainingSchool',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'AddCaregiverTrainingSchool',
      type: 'AddCaregiverTrainingSchool',
      description: 'AddCaregiverTrainingSchool',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'AddCaregiverTrainingSchoolResponse',
      description: 'AddCaregiverTrainingSchoolResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/AddCaregiverTrainingSchool' },
  description: 'AddCaregiverTrainingSchool'
}
  );
  
  wswsSoap.remoteMethod('UpdateCaregiverTrainingSchool',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'UpdateCaregiverTrainingSchool',
      type: 'UpdateCaregiverTrainingSchool',
      description: 'UpdateCaregiverTrainingSchool',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'UpdateCaregiverTrainingSchoolResponse',
      description: 'UpdateCaregiverTrainingSchoolResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/UpdateCaregiverTrainingSchool' },
  description: 'UpdateCaregiverTrainingSchool'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverTrainingSchools',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverTrainingSchools',
      type: 'GetCaregiverTrainingSchools',
      description: 'GetCaregiverTrainingSchools',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverTrainingSchoolsResponse',
      description: 'GetCaregiverTrainingSchoolsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverTrainingSchools' },
  description: 'GetCaregiverTrainingSchools'
}
  );
  
  wswsSoap.remoteMethod('GetComplianceTrainingSchools',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetComplianceTrainingSchools',
      type: 'GetComplianceTrainingSchools',
      description: 'GetComplianceTrainingSchools',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetComplianceTrainingSchoolsResponse',
      description: 'GetComplianceTrainingSchoolsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetComplianceTrainingSchools' },
  description: 'GetComplianceTrainingSchools'
}
  );
  
  wswsSoap.remoteMethod('AddCaregiverEvaluation',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'AddCaregiverEvaluation',
      type: 'AddCaregiverEvaluation',
      description: 'AddCaregiverEvaluation',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'AddCaregiverEvaluationResponse',
      description: 'AddCaregiverEvaluationResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/AddCaregiverEvaluation' },
  description: 'AddCaregiverEvaluation'
}
  );
  
  wswsSoap.remoteMethod('UpdateCaregiverEvaluation',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'UpdateCaregiverEvaluation',
      type: 'UpdateCaregiverEvaluation',
      description: 'UpdateCaregiverEvaluation',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'UpdateCaregiverEvaluationResponse',
      description: 'UpdateCaregiverEvaluationResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/UpdateCaregiverEvaluation' },
  description: 'UpdateCaregiverEvaluation'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverEvaluations',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverEvaluations',
      type: 'GetCaregiverEvaluations',
      description: 'GetCaregiverEvaluations',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverEvaluationsResponse',
      description: 'GetCaregiverEvaluationsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverEvaluations' },
  description: 'GetCaregiverEvaluations'
}
  );
  
  wswsSoap.remoteMethod('AddCaregiverInService',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'AddCaregiverInService',
      type: 'AddCaregiverInService',
      description: 'AddCaregiverInService',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'AddCaregiverInServiceResponse',
      description: 'AddCaregiverInServiceResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/AddCaregiverInService' },
  description: 'AddCaregiverInService'
}
  );
  
  wswsSoap.remoteMethod('UpdateCaregiverInService',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'UpdateCaregiverInService',
      type: 'UpdateCaregiverInService',
      description: 'UpdateCaregiverInService',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'UpdateCaregiverInServiceResponse',
      description: 'UpdateCaregiverInServiceResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/UpdateCaregiverInService' },
  description: 'UpdateCaregiverInService'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverInServices',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverInServices',
      type: 'GetCaregiverInServices',
      description: 'GetCaregiverInServices',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverInServicesResponse',
      description: 'GetCaregiverInServicesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverInServices' },
  description: 'GetCaregiverInServices'
}
  );
  
  wswsSoap.remoteMethod('UploadCaregiverPicture',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'UploadCaregiverPicture',
      type: 'UploadCaregiverPicture',
      description: 'UploadCaregiverPicture',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'UploadCaregiverPictureResponse',
      description: 'UploadCaregiverPictureResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/UploadCaregiverPicture' },
  description: 'UploadCaregiverPicture'
}
  );
  
  wswsSoap.remoteMethod('RemoveCaregiverPicture',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'RemoveCaregiverPicture',
      type: 'RemoveCaregiverPicture',
      description: 'RemoveCaregiverPicture',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'RemoveCaregiverPictureResponse',
      description: 'RemoveCaregiverPictureResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/RemoveCaregiverPicture' },
  description: 'RemoveCaregiverPicture'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverPreferences',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverPreferences',
      type: 'GetCaregiverPreferences',
      description: 'GetCaregiverPreferences',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverPreferencesResponse',
      description: 'GetCaregiverPreferencesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverPreferences' },
  description: 'GetCaregiverPreferences'
}
  );
  
  wswsSoap.remoteMethod('DownloadCaregiverPicture',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'DownloadCaregiverPicture',
      type: 'DownloadCaregiverPicture',
      description: 'DownloadCaregiverPicture',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'DownloadCaregiverPictureResponse',
      description: 'DownloadCaregiverPictureResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/DownloadCaregiverPicture' },
  description: 'DownloadCaregiverPicture'
}
  );
  
  wswsSoap.remoteMethod('SearchCaregiverDocument',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'SearchCaregiverDocument',
      type: 'SearchCaregiverDocument',
      description: 'SearchCaregiverDocument',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'SearchCaregiverDocumentResponse',
      description: 'SearchCaregiverDocumentResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/SearchCaregiverDocument' },
  description: 'SearchCaregiverDocument'
}
  );
  
  wswsSoap.remoteMethod('AddCaregiverDocument',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'AddCaregiverDocument',
      type: 'AddCaregiverDocument',
      description: 'AddCaregiverDocument',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'AddCaregiverDocumentResponse',
      description: 'AddCaregiverDocumentResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/AddCaregiverDocument' },
  description: 'AddCaregiverDocument'
}
  );
  
  wswsSoap.remoteMethod('UpdateCaregiverDocument',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'UpdateCaregiverDocument',
      type: 'UpdateCaregiverDocument',
      description: 'UpdateCaregiverDocument',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'UpdateCaregiverDocumentResponse',
      description: 'UpdateCaregiverDocumentResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/UpdateCaregiverDocument' },
  description: 'UpdateCaregiverDocument'
}
  );
  
  wswsSoap.remoteMethod('DeleteCaregiverDocument',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'DeleteCaregiverDocument',
      type: 'DeleteCaregiverDocument',
      description: 'DeleteCaregiverDocument',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'DeleteCaregiverDocumentResponse',
      description: 'DeleteCaregiverDocumentResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/DeleteCaregiverDocument' },
  description: 'DeleteCaregiverDocument'
}
  );
  
  wswsSoap.remoteMethod('DownloadCaregiverDocument',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'DownloadCaregiverDocument',
      type: 'DownloadCaregiverDocument',
      description: 'DownloadCaregiverDocument',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'DownloadCaregiverDocumentResponse',
      description: 'DownloadCaregiverDocumentResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/DownloadCaregiverDocument' },
  description: 'DownloadCaregiverDocument'
}
  );
  
  wswsSoap.remoteMethod('ChangeCaregiverDocument',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'ChangeCaregiverDocument',
      type: 'ChangeCaregiverDocument',
      description: 'ChangeCaregiverDocument',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'ChangeCaregiverDocumentResponse',
      description: 'ChangeCaregiverDocumentResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/ChangeCaregiverDocument' },
  description: 'ChangeCaregiverDocument'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverChangesV2',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverChangesV2',
      type: 'GetCaregiverChangesV2',
      description: 'GetCaregiverChangesV2',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverChangesV2Response',
      description: 'GetCaregiverChangesV2Response',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverChangesV2' },
  description: 'GetCaregiverChangesV2'
}
  );
  
  wswsSoap.remoteMethod('UpdateCaregiverI9Requirements',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'UpdateCaregiverI9Requirements',
      type: 'UpdateCaregiverI9Requirements',
      description: 'UpdateCaregiverI9Requirements',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'UpdateCaregiverI9RequirementsResponse',
      description: 'UpdateCaregiverI9RequirementsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/UpdateCaregiverI9Requirements' },
  description: 'UpdateCaregiverI9Requirements'
}
  );
  
  wswsSoap.remoteMethod('UpdateCaregiverAccrualPTO',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'UpdateCaregiverAccrualPTO',
      type: 'UpdateCaregiverAccrualPTO',
      description: 'UpdateCaregiverAccrualPTO',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'UpdateCaregiverAccrualPTOResponse',
      description: 'UpdateCaregiverAccrualPTOResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/UpdateCaregiverAccrualPTO' },
  description: 'UpdateCaregiverAccrualPTO'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverPayrollInfoChangesV2',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverPayrollInfoChangesV2',
      type: 'GetCaregiverPayrollInfoChangesV2',
      description: 'GetCaregiverPayrollInfoChangesV2',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverPayrollInfoChangesV2Response',
      description: 'GetCaregiverPayrollInfoChangesV2Response',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverPayrollInfoChangesV2' },
  description: 'GetCaregiverPayrollInfoChangesV2'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverAbsenceChangesV2',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverAbsenceChangesV2',
      type: 'GetCaregiverAbsenceChangesV2',
      description: 'GetCaregiverAbsenceChangesV2',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverAbsenceChangesV2Response',
      description: 'GetCaregiverAbsenceChangesV2Response',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverAbsenceChangesV2' },
  description: 'GetCaregiverAbsenceChangesV2'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverRestriction',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverRestriction',
      type: 'GetCaregiverRestriction',
      description: 'GetCaregiverRestriction',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverRestrictionResponse',
      description: 'GetCaregiverRestrictionResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverRestriction' },
  description: 'GetCaregiverRestriction'
}
  );
  
  wswsSoap.remoteMethod('CreateInserviceTopics',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'CreateInserviceTopics',
      type: 'CreateInserviceTopics',
      description: 'CreateInserviceTopics',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'CreateInserviceTopicsResponse',
      description: 'CreateInserviceTopicsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/CreateInserviceTopics' },
  description: 'CreateInserviceTopics'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverPictureChanges',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverPictureChanges',
      type: 'GetCaregiverPictureChanges',
      description: 'GetCaregiverPictureChanges',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverPictureChangesResponse',
      description: 'GetCaregiverPictureChangesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverPictureChanges' },
  description: 'GetCaregiverPictureChanges'
}
  );
  
  wswsSoap.remoteMethod('GetCoordinators',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCoordinators',
      type: 'GetCoordinators',
      description: 'GetCoordinators',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCoordinatorsResponse',
      description: 'GetCoordinatorsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCoordinators' },
  description: 'GetCoordinators'
}
  );
  
  wswsSoap.remoteMethod('GetOffices',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetOffices',
      type: 'GetOffices',
      description: 'GetOffices',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetOfficesResponse',
      description: 'GetOfficesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetOffices' },
  description: 'GetOffices'
}
  );
  
  wswsSoap.remoteMethod('GetScheduleBillInfoEditReasons',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetScheduleBillInfoEditReasons',
      type: 'GetScheduleBillInfoEditReasons',
      description: 'GetScheduleBillInfoEditReasons',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetScheduleBillInfoEditReasonsResponse',
      description: 'GetScheduleBillInfoEditReasonsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetScheduleBillInfoEditReasons' },
  description: 'GetScheduleBillInfoEditReasons'
}
  );
  
  wswsSoap.remoteMethod('GetFluSeasonYears',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetFluSeasonYears',
      type: 'GetFluSeasonYears',
      description: 'GetFluSeasonYears',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetFluSeasonYearsResponse',
      description: 'GetFluSeasonYearsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetFluSeasonYears' },
  description: 'GetFluSeasonYears'
}
  );
  
  wswsSoap.remoteMethod('GetPatientNoteReasons',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPatientNoteReasons',
      type: 'GetPatientNoteReasons',
      description: 'GetPatientNoteReasons',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPatientNoteReasonsResponse',
      description: 'GetPatientNoteReasonsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPatientNoteReasons' },
  description: 'GetPatientNoteReasons'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverNoteSubjects',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverNoteSubjects',
      type: 'GetCaregiverNoteSubjects',
      description: 'GetCaregiverNoteSubjects',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverNoteSubjectsResponse',
      description: 'GetCaregiverNoteSubjectsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverNoteSubjects' },
  description: 'GetCaregiverNoteSubjects'
}
  );
  
  wswsSoap.remoteMethod('GetSourceOfAdmissions',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetSourceOfAdmissions',
      type: 'GetSourceOfAdmissions',
      description: 'GetSourceOfAdmissions',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetSourceOfAdmissionsResponse',
      description: 'GetSourceOfAdmissionsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetSourceOfAdmissions' },
  description: 'GetSourceOfAdmissions'
}
  );
  
  wswsSoap.remoteMethod('GetBillingServiceCodes',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetBillingServiceCodes',
      type: 'GetBillingServiceCodes',
      description: 'GetBillingServiceCodes',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetBillingServiceCodesResponse',
      description: 'GetBillingServiceCodesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetBillingServiceCodes' },
  description: 'GetBillingServiceCodes'
}
  );
  
  wswsSoap.remoteMethod('GetLanguages',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetLanguages',
      type: 'GetLanguages',
      description: 'GetLanguages',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetLanguagesResponse',
      description: 'GetLanguagesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetLanguages' },
  description: 'GetLanguages'
}
  );
  
  wswsSoap.remoteMethod('GetContracts',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetContracts',
      type: 'GetContracts',
      description: 'GetContracts',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetContractsResponse',
      description: 'GetContractsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetContracts' },
  description: 'GetContracts'
}
  );
  
  wswsSoap.remoteMethod('GetPayRateCodes',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPayRateCodes',
      type: 'GetPayRateCodes',
      description: 'GetPayRateCodes',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPayRateCodesResponse',
      description: 'GetPayRateCodesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPayRateCodes' },
  description: 'GetPayRateCodes'
}
  );
  
  wswsSoap.remoteMethod('GetI9Documents',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetI9Documents',
      type: 'GetI9Documents',
      description: 'GetI9Documents',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetI9DocumentsResponse',
      description: 'GetI9DocumentsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetI9Documents' },
  description: 'GetI9Documents'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverReferralSources',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverReferralSources',
      type: 'GetCaregiverReferralSources',
      description: 'GetCaregiverReferralSources',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverReferralSourcesResponse',
      description: 'GetCaregiverReferralSourcesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverReferralSources' },
  description: 'GetCaregiverReferralSources'
}
  );
  
  wswsSoap.remoteMethod('GetStatusReasonsForCaregiver',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetStatusReasonsForCaregiver',
      type: 'GetStatusReasonsForCaregiver',
      description: 'GetStatusReasonsForCaregiver',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetStatusReasonsForCaregiverResponse',
      description: 'GetStatusReasonsForCaregiverResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetStatusReasonsForCaregiver' },
  description: 'GetStatusReasonsForCaregiver'
}
  );
  
  wswsSoap.remoteMethod('GetBranches',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetBranches',
      type: 'GetBranches',
      description: 'GetBranches',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetBranchesResponse',
      description: 'GetBranchesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetBranches' },
  description: 'GetBranches'
}
  );
  
  wswsSoap.remoteMethod('GetLocations',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetLocations',
      type: 'GetLocations',
      description: 'GetLocations',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetLocationsResponse',
      description: 'GetLocationsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetLocations' },
  description: 'GetLocations'
}
  );
  
  wswsSoap.remoteMethod('GetNurses',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetNurses',
      type: 'GetNurses',
      description: 'GetNurses',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetNursesResponse',
      description: 'GetNursesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetNurses' },
  description: 'GetNurses'
}
  );
  
  wswsSoap.remoteMethod('GetMobilityStatuses',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetMobilityStatuses',
      type: 'GetMobilityStatuses',
      description: 'GetMobilityStatuses',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetMobilityStatusesResponse',
      description: 'GetMobilityStatusesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetMobilityStatuses' },
  description: 'GetMobilityStatuses'
}
  );
  
  wswsSoap.remoteMethod('GetEvacuationZones',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetEvacuationZones',
      type: 'GetEvacuationZones',
      description: 'GetEvacuationZones',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetEvacuationZonesResponse',
      description: 'GetEvacuationZonesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetEvacuationZones' },
  description: 'GetEvacuationZones'
}
  );
  
  wswsSoap.remoteMethod('GetEmergencyContactRelationships',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetEmergencyContactRelationships',
      type: 'GetEmergencyContactRelationships',
      description: 'GetEmergencyContactRelationships',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetEmergencyContactRelationshipsResponse',
      description: 'GetEmergencyContactRelationshipsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetEmergencyContactRelationships' },
  description: 'GetEmergencyContactRelationships'
}
  );
  
  wswsSoap.remoteMethod('GetPatientTeams',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPatientTeams',
      type: 'GetPatientTeams',
      description: 'GetPatientTeams',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPatientTeamsResponse',
      description: 'GetPatientTeamsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPatientTeams' },
  description: 'GetPatientTeams'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverTeams',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverTeams',
      type: 'GetCaregiverTeams',
      description: 'GetCaregiverTeams',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverTeamsResponse',
      description: 'GetCaregiverTeamsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverTeams' },
  description: 'GetCaregiverTeams'
}
  );
  
  wswsSoap.remoteMethod('GetEvacuationLocations',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetEvacuationLocations',
      type: 'GetEvacuationLocations',
      description: 'GetEvacuationLocations',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetEvacuationLocationsResponse',
      description: 'GetEvacuationLocationsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetEvacuationLocations' },
  description: 'GetEvacuationLocations'
}
  );
  
  wswsSoap.remoteMethod('GetPatientDischargeTo',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPatientDischargeTo',
      type: 'GetPatientDischargeTo',
      description: 'GetPatientDischargeTo',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPatientDischargeToResponse',
      description: 'GetPatientDischargeToResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPatientDischargeTo' },
  description: 'GetPatientDischargeTo'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverNotificationMethods',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverNotificationMethods',
      type: 'GetCaregiverNotificationMethods',
      description: 'GetCaregiverNotificationMethods',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverNotificationMethodsResponse',
      description: 'GetCaregiverNotificationMethodsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverNotificationMethods' },
  description: 'GetCaregiverNotificationMethods'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverCityTaxes',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverCityTaxes',
      type: 'GetCaregiverCityTaxes',
      description: 'GetCaregiverCityTaxes',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverCityTaxesResponse',
      description: 'GetCaregiverCityTaxesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverCityTaxes' },
  description: 'GetCaregiverCityTaxes'
}
  );
  
  wswsSoap.remoteMethod('GetCollectionARNoteReasons',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCollectionARNoteReasons',
      type: 'GetCollectionARNoteReasons',
      description: 'GetCollectionARNoteReasons',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCollectionARNoteReasonsResponse',
      description: 'GetCollectionARNoteReasonsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCollectionARNoteReasons' },
  description: 'GetCollectionARNoteReasons'
}
  );
  
  wswsSoap.remoteMethod('GetCollectionRepresentatives',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCollectionRepresentatives',
      type: 'GetCollectionRepresentatives',
      description: 'GetCollectionRepresentatives',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCollectionRepresentativesResponse',
      description: 'GetCollectionRepresentativesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCollectionRepresentatives' },
  description: 'GetCollectionRepresentatives'
}
  );
  
  wswsSoap.remoteMethod('GetCollectionFollowUpRepresentatives',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCollectionFollowUpRepresentatives',
      type: 'GetCollectionFollowUpRepresentatives',
      description: 'GetCollectionFollowUpRepresentatives',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCollectionFollowUpRepresentativesResponse',
      description: 'GetCollectionFollowUpRepresentativesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCollectionFollowUpRepresentatives' },
  description: 'GetCollectionFollowUpRepresentatives'
}
  );
  
  wswsSoap.remoteMethod('GetCollectionStatus',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCollectionStatus',
      type: 'GetCollectionStatus',
      description: 'GetCollectionStatus',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCollectionStatusResponse',
      description: 'GetCollectionStatusResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCollectionStatus' },
  description: 'GetCollectionStatus'
}
  );
  
  wswsSoap.remoteMethod('GetCollectionClaimStatus',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCollectionClaimStatus',
      type: 'GetCollectionClaimStatus',
      description: 'GetCollectionClaimStatus',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCollectionClaimStatusResponse',
      description: 'GetCollectionClaimStatusResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCollectionClaimStatus' },
  description: 'GetCollectionClaimStatus'
}
  );
  
  wswsSoap.remoteMethod('GetCollectionReasonForNonPayment',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCollectionReasonForNonPayment',
      type: 'GetCollectionReasonForNonPayment',
      description: 'GetCollectionReasonForNonPayment',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCollectionReasonForNonPaymentResponse',
      description: 'GetCollectionReasonForNonPaymentResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCollectionReasonForNonPayment' },
  description: 'GetCollectionReasonForNonPayment'
}
  );
  
  wswsSoap.remoteMethod('GetPayrollTaxTypes',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPayrollTaxTypes',
      type: 'GetPayrollTaxTypes',
      description: 'GetPayrollTaxTypes',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPayrollTaxTypesResponse',
      description: 'GetPayrollTaxTypesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPayrollTaxTypes' },
  description: 'GetPayrollTaxTypes'
}
  );
  
  wswsSoap.remoteMethod('GetPayrollTaxLocations',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPayrollTaxLocations',
      type: 'GetPayrollTaxLocations',
      description: 'GetPayrollTaxLocations',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPayrollTaxLocationsResponse',
      description: 'GetPayrollTaxLocationsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPayrollTaxLocations' },
  description: 'GetPayrollTaxLocations'
}
  );
  
  wswsSoap.remoteMethod('GetPayrollStateFillingStatus',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPayrollStateFillingStatus',
      type: 'GetPayrollStateFillingStatus',
      description: 'GetPayrollStateFillingStatus',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPayrollStateFillingStatusResponse',
      description: 'GetPayrollStateFillingStatusResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPayrollStateFillingStatus' },
  description: 'GetPayrollStateFillingStatus'
}
  );
  
  wswsSoap.remoteMethod('GetPayrollFederalFillingStatus',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPayrollFederalFillingStatus',
      type: 'GetPayrollFederalFillingStatus',
      description: 'GetPayrollFederalFillingStatus',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPayrollFederalFillingStatusResponse',
      description: 'GetPayrollFederalFillingStatusResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPayrollFederalFillingStatus' },
  description: 'GetPayrollFederalFillingStatus'
}
  );
  
  wswsSoap.remoteMethod('GetPayrollCostCenters',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetPayrollCostCenters',
      type: 'GetPayrollCostCenters',
      description: 'GetPayrollCostCenters',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetPayrollCostCentersResponse',
      description: 'GetPayrollCostCentersResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetPayrollCostCenters' },
  description: 'GetPayrollCostCenters'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverOtherCompliance',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverOtherCompliance',
      type: 'GetCaregiverOtherCompliance',
      description: 'GetCaregiverOtherCompliance',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverOtherComplianceResponse',
      description: 'GetCaregiverOtherComplianceResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverOtherCompliance' },
  description: 'GetCaregiverOtherCompliance'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverMedicals',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverMedicals',
      type: 'GetCaregiverMedicals',
      description: 'GetCaregiverMedicals',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverMedicalsResponse',
      description: 'GetCaregiverMedicalsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverMedicals' },
  description: 'GetCaregiverMedicals'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverMedicalResults',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverMedicalResults',
      type: 'GetCaregiverMedicalResults',
      description: 'GetCaregiverMedicalResults',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverMedicalResultsResponse',
      description: 'GetCaregiverMedicalResultsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverMedicalResults' },
  description: 'GetCaregiverMedicalResults'
}
  );
  
  wswsSoap.remoteMethod('GetCaregiverOtherComplianceResults',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetCaregiverOtherComplianceResults',
      type: 'GetCaregiverOtherComplianceResults',
      description: 'GetCaregiverOtherComplianceResults',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetCaregiverOtherComplianceResultsResponse',
      description: 'GetCaregiverOtherComplianceResultsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetCaregiverOtherComplianceResults' },
  description: 'GetCaregiverOtherComplianceResults'
}
  );
  
  wswsSoap.remoteMethod('GetElectricEquipments',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetElectricEquipments',
      type: 'GetElectricEquipments',
      description: 'GetElectricEquipments',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetElectricEquipmentsResponse',
      description: 'GetElectricEquipmentsResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetElectricEquipments' },
  description: 'GetElectricEquipments'
}
  );
  
  wswsSoap.remoteMethod('GetEthnicity',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetEthnicity',
      type: 'GetEthnicity',
      description: 'GetEthnicity',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetEthnicityResponse',
      description: 'GetEthnicityResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetEthnicity' },
  description: 'GetEthnicity'
}
  );
  
  wswsSoap.remoteMethod('GetContractServiceCode',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetContractServiceCode',
      type: 'GetContractServiceCode',
      description: 'GetContractServiceCode',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetContractServiceCodeResponse',
      description: 'GetContractServiceCodeResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetContractServiceCode' },
  description: 'GetContractServiceCode'
}
  );
  
  wswsSoap.remoteMethod('GetLinkedContractServiceCodes',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetLinkedContractServiceCodes',
      type: 'GetLinkedContractServiceCodes',
      description: 'GetLinkedContractServiceCodes',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetLinkedContractServiceCodesResponse',
      description: 'GetLinkedContractServiceCodesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetLinkedContractServiceCodes' },
  description: 'GetLinkedContractServiceCodes'
}
  );
  
  wswsSoap.remoteMethod('GetDisciplines',
  {
  isStatic: true,
  produces: [ { produces: 'application/json' }, { produces: 'application/xml' } ],
  accepts: [
    {
      arg: 'GetDisciplines',
      type: 'GetDisciplines',
      description: 'GetDisciplines',
      required: true,
      http: { source: 'body' }
    }
  ],
  returns: [
    {
      arg: 'data',
      type: 'GetDisciplinesResponse',
      description: 'GetDisciplinesResponse',
      root: true
    }
  ],
  http: { verb: 'post', path: '/GetDisciplines' },
  description: 'GetDisciplines'
}
  );
  
}
