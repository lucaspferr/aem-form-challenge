/*
 * ***********************************************************************
 * Form App CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Form App.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Form App and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Form App
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Form App.
 * ***********************************************************************
 */

package com.formapp.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code FormComponent} Sling Model used for the {@code formapp/components/form-component} component.
 * 
 */
@ConsumerType
public interface FormComponent
    extends ComponentExporter
{


    @JsonProperty("mainTitle")
    String getMainTitle();

    @JsonProperty("firstTabName")
    String getFirstTabName();

    @JsonProperty("secondTabName")
    String getSecondTabName();

    @JsonProperty("thirdTabName")
    String getThirdTabName();

    @JsonProperty("nextButtonText")
    String getNextButtonText();

    @JsonProperty("finishButtonText")
    String getFinishButtonText();

    @JsonProperty("returnButtonText")
    String getReturnButtonText();

    @JsonProperty("fullNameLabel")
    String getFullNameLabel();

    @JsonProperty("nickNameLabel")
    String getNickNameLabel();

    @JsonProperty("emailLabel")
    String getEmailLabel();

    @JsonProperty("phoneLabel")
    String getPhoneLabel();

    @JsonProperty("termsLabel")
    String getTermsLabel();

    @JsonProperty("birthdayLabel")
    String getBirthdayLabel();

    @JsonProperty("dayLabel")
    String getDayLabel();

    @JsonProperty("monthLabel")
    String getMonthLabel();

    @JsonProperty("yearLabel")
    String getYearLabel();

    @JsonProperty("ageLabel")
    String getAgeLabel();

    @JsonProperty("linkedinLabel")
    String getLinkedinLabel();

    @JsonProperty("githubLabel")
    String getGithubLabel();

    @JsonProperty("certificatesLabel")
    String getCertificatesLabel();

    @JsonProperty("certificatesButtonLabel")
    String getCertificatesButtonLabel();

    @JsonProperty("moreButtonText")
    String getMoreButtonText();

    @JsonProperty("teamNameLabel")
    String getTeamNameLabel();

    @JsonProperty("institutionLabel")
    String getInstitutionLabel();

    @JsonProperty("graduationLabel")
    String getGraduationLabel();

}
